import "./FeaturedProducts.css";
import {useContext} from "react";
import {ProductContext} from "../../context/ProductContext";
import {FiHeart, FiShoppingCart} from "react-icons/fi";
import {CartContext} from "../../context/CartContext";
import {WishlistContext} from "../../context/WishlistContext";
import {Link} from "react-router-dom";

const FeaturedProducts = () => {
  const {products} = useContext(ProductContext);
  const {addToWishlist} = useContext(WishlistContext);
  const {addToCart} = useContext(CartContext);
  const featuredProducts = [...products].sort((a, b) => b.id - a.id);

  const {wishlistItems} = useContext(WishlistContext);
  const {cartItems} = useContext(CartContext);

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Top selling electronic products</p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-actions">
                <button
                  className={
                    wishlistItems.some((item) => item.id === product.id)
                      ? "action-active"
                      : ""
                  }
                  onClick={() => addToWishlist(product)}
                >
                  <FiHeart />
                </button>

                <button
                  className={
                    cartItems.some((item) => item.id === product.id)
                      ? "action-active"
                      : ""
                  }
                  onClick={() => addToCart(product, 1)}
                >
                  <FiShoppingCart />
                </button>
              </div>

              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>

              <Link to={`/product/${product.id}`} className="product-link">
                <h3>{product.name}</h3>
              </Link>

              <div className="rating">⭐⭐⭐⭐⭐</div>
              <h4>₹{product.price.toLocaleString()}</h4>
              <button className="cart-btn" onClick={() => addToCart(product)}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
