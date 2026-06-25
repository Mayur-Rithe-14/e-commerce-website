import {Link} from "react-router-dom";
import {FiCheckCircle, FiPackage} from "react-icons/fi";

import "./OrderSuccess.css";

const OrderSuccess = () => {
  const orderId = `ESH${Date.now().toString().slice(-6)}`;

  return (
    <section className="success-page">
      <div className="container">
        <div className="success-card">
          <div className="success-icon">
            <FiCheckCircle />
          </div>

          <h1>Order Placed Successfully!</h1>

          <p>
            Thank you for shopping with E-Shop. Your order has been confirmed
            and is being processed.
          </p>

          <div className="order-info">
            <div className="info-box">
              <h4>Order ID</h4>
              <span>#{orderId}</span>
            </div>

            <div className="info-box">
              <h4>Delivery</h4>
              <span>3 - 5 Business Days</span>
            </div>

            <div className="info-box">
              <h4>Status</h4>
              <span>Processing</span>
            </div>
          </div>

          <div className="success-actions">
            <Link to="/my-orders" className="orders-btn">
              <FiPackage />
              View Orders
            </Link>

            <Link to="/shop" className="shop-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
