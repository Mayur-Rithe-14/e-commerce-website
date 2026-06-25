import {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext";
import {OrderContext} from "../../context/OrderContext";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

import "./Checkout.css";

const Checkout = () => {
  const {cartItems, clearCart} = useContext(CartContext);
  const {placeOrder} = useContext(OrderContext);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 0 ? 99 : 0;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login before placing an order");
      navigate("/login");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    try {
      const newOrder = {
        customer: shippingInfo.fullName,
        total,
        paymentMethod: "COD",
        shippingAddress: `
${shippingInfo.address},
${shippingInfo.city},
${shippingInfo.state},
${shippingInfo.pinCode}
        `,
        items: cartItems.map((item) => ({
          productId: item._id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          image: item.image,
        })),
      };

      await placeOrder(newOrder);

      clearCart();

      toast.success("Order Placed Successfully");

      navigate("/order-success");
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order");
    }
  };

  return (
    <section className="checkout-page">
      <div className="container">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-layout">
          {/* Shipping Form */}
          <div className="checkout-form">
            <h2>Shipping Information</h2>

            <form onSubmit={handlePlaceOrder}>
              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={shippingInfo.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={shippingInfo.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={shippingInfo.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Address</label>

                <input
                  type="text"
                  name="address"
                  placeholder="Street address"
                  value={shippingInfo.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={shippingInfo.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>State</label>

                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={shippingInfo.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>PIN Code</label>

                <input
                  type="text"
                  name="pinCode"
                  placeholder="PIN Code"
                  value={shippingInfo.pinCode}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="place-order-btn">
                Place Order
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="checkout-summary">
            <h2>Order Summary</h2>

            <div className="summary-products">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div className="summary-product" key={item._id || item.id}>
                    <img src={item.image} alt={item.name} />

                    <div>
                      <h4>{item.name}</h4>
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>₹{shipping.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Tax (18%)</span>
              <span>₹{tax.toLocaleString()}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
