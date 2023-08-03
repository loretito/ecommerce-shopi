import { useEffect, useState } from "react";
import { ShoppingContext } from "./ShoppingContext";

export const ShoppingProvider = ({ children }) => {
  //Shopping Cart - Cart quantity
  const [count, setCount] = useState(0);

  //Shopping Cart - Open/close side
  const [openAside, setOpenAside] = useState(false);

  //Shopping Cart - Open/close checkout cart
  const [checkoutSideMenu, setCheckoutSideMenu] = useState(false);

  const [loading, setLoading] = useState(true)

  //Shopping Cart - Show item (product)
  const [item, setItem] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    iamge: "",
    rating: {
      rate: 0,
      count: 0,
    },
    quantity: 0,
  });

  //Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping Cart - Order
  const [order, setOrder] = useState([]);

  const openProductDetail = itemDetail => {
    setItem(itemDetail);
    setOpenAside(true);
    setCheckoutSideMenu(false);
  };

  const closeProductDetail = () => {
    setOpenAside(false);
    setCheckoutSideMenu(false);
  };

  const openCheckoutMenu = () => {
    setCheckoutSideMenu(state => !state);
    openAside && setOpenAside(false);
  };

  const closeCheckoutMenu = () => {
    setCheckoutSideMenu(false);
    setOpenAside(false);
  };

  const addProduct = (event, product) => {
    event.stopPropagation();
    const productExists = cartProducts.some(p => p.id === product.id);

    if (productExists) {
      const cartProduct = cartProducts.find(p => p.id === product.id);

      cartProduct.quantity += 1;
    } else {
      product.quantity = 1;
      setCartProducts([...cartProducts, product]);
    }
    setCount(state => state + 1);
  };

  const addCart = product => {
    const cartProduct = cartProducts.find(p => p.id === product.id);
    cartProduct.quantity += 1;
    setCount(state => state + 1);
  };

  const removeCart = product => {
    const productIndex = cartProducts.findIndex(p => p.id === product.id);
    const productToChange = cartProducts[productIndex];

    if (productToChange.quantity > 1) {
      productToChange.quantity -= 1;
      setCount(state => state - 1);
    } else {
      const newCartProduct = [...cartProducts];
      newCartProduct.splice(productIndex, 1);
      setCount(state => state - 1);
      setCartProducts(newCartProduct);
    }
  };

  const removeCartButton = product => {
    const productIndex = cartProducts.findIndex(p => p.id === product.id);
    const newCartProduct = [...cartProducts];
    newCartProduct.splice(productIndex, 1);
    setCount(state => state - cartProducts[productIndex].quantity);
    setCartProducts(newCartProduct);
  };

  //Get products
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const [searchByTitle, setsearchByTitle] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res =>
        res.json().then(data => {
          setItems(data);
          setLoading(false)
        })
      )
      .catch(error => {
        console.error(error);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json().then(data => setCategories(data)))
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [filteredItems, setFilteredItems] = useState([]);
  const [category, setcategory] = useState("");

  const filterItemsByTitle = (itemList, searchTitle, category) => {
    const filter = itemList.filter(item_ =>
      item_.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    if (searchByTitle === "" && category === "") {
      return itemList;
    }else if(category === ''){
      return filter
    }

    return filter.filter(item => item.category === category);
  };

  useEffect(() => {
    setFilteredItems(filterItemsByTitle(items, searchByTitle, category));
  }, [searchByTitle, items, category]); //add category

  return (
    <ShoppingContext.Provider
      value={{
        count,
        setCount,
        openAside,
        item,
        openProductDetail,
        closeProductDetail,
        setCartProducts,
        cartProducts,
        checkoutSideMenu,
        openCheckoutMenu,
        closeCheckoutMenu,
        addProduct,
        addCart,
        removeCart,
        removeCartButton,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setsearchByTitle,
        filteredItems,
        categories,
        setcategory,
        loading
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
