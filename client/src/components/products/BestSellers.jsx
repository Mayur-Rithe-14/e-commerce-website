import "./BestSellers.css";

import phone from "../../assets/images/phone.png";
import camera from "../../assets/images/camera.png";
import headphones from "../../assets/images/headphone.png";
import smartwatch from "../../assets/images/smartwatch.png";

import {
  FiHeart,
  FiShoppingCart,
  FiEye,
} from "react-icons/fi";

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 16 Pro Max",
      image: phone,
      oldPrice: "₹99,999",
      price: "₹89,999",
      category: "Smartphone",
      badge: "-10%",
    },
    {
      id: 2,
      name: "Canon EOS Camera",
      image: camera,
      oldPrice: "₹64,999",
      price: "₹54,999",
      category: "Camera",
      badge: "-15%",
    },
    {
      id: 3,
      name: "Premium Headphones",
      image: headphones,
      oldPrice: "₹7,999",
      price: "₹4,999",
      category: "Audio",
      badge: "-35%",
    },
    {
      id: 4,
      name: "Apple Watch Ultra",
      image: smartwatch,
      oldPrice: "₹15,999",
      price: "₹12,999",
      category: "Watch",
      badge: "-20%",
    },
  ];

  return (
    <section className="best-sellers">
      <div className="container">

        <div className="section-header">
          <h2>Best Sellers</h2>
          <p>
            Most popular products this week
          </p>
        </div>

        <div className="best-grid">
          {products.map((product) => (
            <div
              className="best-card"
              key={product.id}
            >
              <span className="discount-badge">
                {product.badge}
              </span>

              <div className="hover-actions">
                <button>
                  <FiHeart />
                </button>

                <button>
                  <FiEye />
                </button>

                <button>
                  <FiShoppingCart />
                </button>
              </div>

              <img
                src={product.image}
                alt={product.name}
              />

              <span className="product-category">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <div className="price-row">
                <span className="old-price">
                  {product.oldPrice}
                </span>

                <span className="new-price">
                  {product.price}
                </span>
              </div>

              <button className="add-cart-btn">
                Add To Cart
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSellers;