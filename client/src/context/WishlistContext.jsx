import {createContext, useState, useEffect} from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({children}) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    const exists = wishlistItems.find((item) => item._id === product._id);

    if (exists) {
      setWishlistItems((prev) =>
        prev.filter((item) => item._id !== product._id),
      );
    } else {
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item._id !== id));
  };

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item._id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
