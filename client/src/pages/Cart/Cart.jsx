import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";

import "./Cart.css";

const Cart = () => {
  const {cartItems, increaseQty, decreaseQty, removeItem} =
    useContext(CartContext);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <section className="cart-page">
      <div className="container">
        <h1 className="cart-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>🛒 Your Cart Is Empty</h2>

            <p>
              Looks like you haven't added any products yet. Start exploring our
              collection.
            </p>

            <Link to="/shop" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Left Side - Cart Items */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                  </div>

                  <div className="qty-box">
                    <button onClick={() => decreaseQty(item._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item._id)}>+</button>
                  </div>

                  <div className="cart-price">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Right Side - Summary */}
            <div className="cart-summary">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>FREE</span>
              </div>

              <div className="summary-row total-row">
                <span>Total</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <Link to="/checkout" className="checkout-btn">
                Proceed To Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
