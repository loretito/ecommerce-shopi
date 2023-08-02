export const totalPrice = cartProducts => {
  let totalPrice = 0;

  cartProducts.forEach(product => {
    totalPrice += product.price * product.quantity;
  });

  return totalPrice.toFixed(2);
};
