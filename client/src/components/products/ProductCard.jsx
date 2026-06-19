import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa";

import "./ProductCard.css";

const ProductCard = ({product}) => {
  return (
    <Link to={`/product/${product._id}`} className="product-link">
      {" "}
      <div className="product-card">
        {/* Sale Badge */}
        {product.discount > 0 && (
          <span className="sale-badge">-{product.discount}% </span>
        )}

        {/* Product Image */}
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>

        {/* Product Info */}
        <div className="product-content">
          <h3>{product.name}</h3>

          {/* Rating */}
          <div className="product-rating">
            <FaStar />

            <span>
              {product.rating || 5} ({product.reviews || 0})
            </span>
          </div>

          {/* Price */}
          <div className="product-price">
            <span className="current-price">
              ₹{Number(product.price).toLocaleString("en-IN")}
            </span>

            {product.discount > 0 && (
              <span className="old-price">
                ₹
                {Math.round(
                  product.price / (1 - product.discount / 100),
                ).toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {/* Stock */}
          <p className={Number(product.stock) > 0 ? "in-stock" : "out-stock"}>
            {Number(product.stock) > 0
              ? `● In Stock (${product.stock})`
              : "● Out Of Stock"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
