import { createContext, useState, useCallback, useEffect } from "react";

export const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cartInitialised, setCartInitialised] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  const addItem = useCallback( //activated onClick, add item to cart
    (item) => {
      setCart((state) => [...state, item]);
    },
    [setCart]
  );

  const removeItem = useCallback( //activated onClick, remove item from cart
    (item) => {
      setCart((state) => state.filter((i) => i !== item));
    },
    [setCart]
  );

  useEffect(() => {
    if (cartInitialised) {
        setCartTotal(cart.reduce((sum, item) => sum + parseInt(item.price), 0));
        localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    try {
      setCartInitialised(true);
      const oldCart = JSON.parse(localStorage.getItem("cart"));
      setCart(oldCart || []);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const ctx = {
    cart,
    cartTotal,
    removeItem,
    addItem,
  };

  return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
};
