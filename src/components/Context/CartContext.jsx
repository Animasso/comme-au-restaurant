import { useContext, useState, createContext } from "react";
//context
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // add a dish
  const addToCart = (dish) => {
    setCart((prevCart) => {
      const existingDish = prevCart.find((item) => item.id === dish.id);
      if (existingDish) {
        return prevCart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...dish, quantity: 1 }];
    });
  };
  //remove a dish
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  //   delete the contain of the cart
  const clearCart = () => {
    setCart([]);
  };
  return (
    // Provider value
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// consumer
export const useCart = () => useContext(CartContext);
