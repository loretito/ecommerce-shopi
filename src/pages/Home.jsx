import { useState, useEffect } from "react";
import { Card, CheckoutSideMenu, ProductDetail } from "../components";

export const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res =>
        res.json().then(data => {
          setItems(data);
        })
      )

      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="grid gap-8 grid-cols-4 w-fit max-x-screen-lg">
        {items.map(item => (
          <Card key={item.id} item={item}/>
        ))}
      </div>

      <ProductDetail />
    </>
  );
};
