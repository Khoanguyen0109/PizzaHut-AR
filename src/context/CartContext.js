const { createContext, useState, useContext } = require("react");

const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [tableProfile, setTableProfile] = useState({});
  const updateTableProfile = (data) => {
    setTableProfile((current) => ({ ...current, ...data }));
  };
  const clearTableProfile = () => {
    setTableProfile({});
  };
  const addToCard = (item) => {
    setCart((current) => [...current, item]);
  };
  const removeFromCart = (id) => {
    const reduceCart = cart.filter((item) => item.id !== id);
    setCart(reduceCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCard,
        tableProfile,
        removeFromCart,
        clearCart,
        updateTableProfile,
        clearTableProfile,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const {
    cart,
    addToCard,
    removeFromCart,
    clearCart,
    tableProfile,
    clearTableProfile,
    updateTableProfile,
  } = useContext(CartContext);
  return {
    cart,
    addToCard,
    removeFromCart,
    clearCart,
    tableProfile,
    clearTableProfile,
    updateTableProfile,
  };
};
