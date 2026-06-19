import {useContext} from "react";
import {Link} from "react-router-dom";
import {OrderContext} from "../../context/OrderContext";

import "./MyOrders.css";

const MyOrders = () => {
  const {orders, loading} = useContext(OrderContext);

  if (loading) {
    return (
      <section className="my-orders-page">
        <div className="container">
          <h1>My Orders</h1>
          <p>Loading orders...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="my-orders-page">
      <div className="container">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <h2>📦 No Orders Yet</h2>

            <p>
              You haven't placed any orders yet. Start shopping and your orders
              will appear here.
            </p>

            <Link to="/shop" className="shop-now-btn">
              Shop Now
            </Link>
          </div>
        ) : (
          orders.map((order) => (
            <div className="order-card" key={order._id}>
              <div className="order-header">
                <div>
                  <h3>Order #{order._id.slice(-6)}</h3>

                  <p>{new Date(order.createdAt).toLocaleDateString("en-IN")}</p>
                </div>

                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>

              <div className="order-products">
                {order.items?.map((item, index) => (
                  <div className="order-product" key={index}>
                    <img src={item.image} alt={item.name} />

                    <div>
                      <h4>{item.name}</h4>
                      <p>Qty: {item.quantity}</p>
                    </div>

                    <span>₹{Number(item.price).toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <strong>
                  Total: ₹{Number(order.total).toLocaleString("en-IN")}
                </strong>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MyOrders;
