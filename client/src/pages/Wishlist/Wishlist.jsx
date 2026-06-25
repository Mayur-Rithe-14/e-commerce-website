import {useContext} from "react";
import {Link} from "react-router-dom";
import {WishlistContext} from "../../context/WishlistContext";
import {CartContext} from "../../context/CartContext";

import "./Wishlist.css";

const Wishlist = () => {
  const {wishlistItems, removeFromWishlist} = useContext(WishlistContext);
  const {addToCart} = useContext(CartContext);

  return (
    <section className="wishlist-page">
      <div className="container">
        <h1>My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <h2>❤️ Wishlist Is Empty</h2>

            <p>Save products you love and they'll appear here.</p>

            <Link to="/shop" className="browse-products-btn">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <div className="wishlist-card" key={item._id}>
                <div className="wishlist-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="wishlist-content">
                  <h3>{item.name}</h3>

                  <p className="wishlist-price">
                    ₹{item.price.toLocaleString()}
                  </p>

                  <div className="wishlist-actions">
                    <button
                      className="move-cart-btn"
                      onClick={() => addToCart(item, 1)}
                    >
                      Add To Cart
                    </button>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromWishlist(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
