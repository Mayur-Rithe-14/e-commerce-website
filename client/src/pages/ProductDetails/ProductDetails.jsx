import {useParams, Link} from "react-router-dom";
import {useContext, useState, useEffect} from "react";
import {WishlistContext} from "../../context/WishlistContext";
import {CartContext} from "../../context/CartContext";
import {ProductContext} from "../../context/ProductContext";
import {toast} from "react-toastify";

import "./ProductDetails.css";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  const {addToCart} = useContext(CartContext);
  const {addToWishlist} = useContext(WishlistContext);
  const {products} = useContext(ProductContext);

  const {id} = useParams();

  // MongoDB uses _id
  const product = products.find((item) => item._id === id);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <section className="product-details">
        {" "}
        <div className="container">
          {" "}
          <h2>Product Not Found</h2>{" "}
        </div>{" "}
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item._id !== product._id,
    )
    .slice(0, 4);

  return (
    <section className="product-details">
      {" "}
      <div className="container">
        {" "}
        <div className="product-details-wrapper">
          {/* Image Section */}{" "}
          <div className="product-image-section">
            {" "}
            <img
              src={selectedImage}
              alt={product.name}
              className="main-product-image"
            />
            ```
            <div className="image-gallery">
              {[product.image, product.image, product.image].map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={product.name}
                    onClick={() => setSelectedImage(img)}
                    className={
                      selectedImage === img
                        ? "gallery-thumb active"
                        : "gallery-thumb"
                    }
                  />
                ),
              )}
            </div>
          </div>
          {/* Content Section */}
          <div className="product-content-section">
            <span className="product-category">{product.category}</span>

            <h1>{product.name}</h1>

            <div className="rating">⭐⭐⭐⭐⭐ (124 Reviews)</div>

            <h2>₹{Number(product.price).toLocaleString("en-IN")}</h2>

            <p
              style={{
                color: Number(product.stock) > 0 ? "green" : "red",
                fontWeight: "600",
              }}
            >
              {Number(product.stock) > 0
                ? `In Stock (${product.stock})`
                : "Out Of Stock"}
            </p>

            <p>{product.description}</p>

            <div className="quantity-box">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <div className="action-buttons">
              <button
                className="cart-btn"
                disabled={Number(product.stock) <= 0}
                onClick={() => {
                  addToCart(product, quantity);

                  toast.success(`Added To Cart`);
                }}
              >
                {Number(product.stock) <= 0 ? "Out Of Stock" : "Add To Cart"}
              </button>

              <button
                className="wishlist-btn"
                onClick={() => {
                  addToWishlist(product);

                  toast.success(`${product.name} Added To Wishlist`);
                }}
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2>Related Products</h2>

            <div className="related-grid">
              {relatedProducts.map((item) => (
                <Link
                  key={item._id}
                  to={`/product/${item._id}`}
                  className="related-card"
                >
                  <img src={item.image} alt={item.name} />

                  <h4>{item.name}</h4>

                  <p>₹{Number(item.price).toLocaleString("en-IN")}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
