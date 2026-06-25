import {createContext, useState, useEffect} from "react";
import {toast} from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity,
        },
      ]);
    }
  };

  const increaseQty = (_id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === _id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQty = (_id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === _id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item,
      ),
    );
  };

  const removeItem = (_id) => {
    setCartItems(cartItems.filter((item) => item._id !== _id));
    toast.info("Item removed from cart");
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (_id) => {
    return cartItems.some((item) => item._id === _id);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
