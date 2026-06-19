import "./Orders.css";

const orders = [
  {
    id: "ESH20260001",
    date: "16 June 2026",
    total: 89999,
    status: "Delivered",
  },
  {
    id: "ESH20260002",
    date: "15 June 2026",
    total: 24999,
    status: "Processing",
  },
  {
    id: "ESH20260003",
    date: "12 June 2026",
    total: 12999,
    status: "Shipped",
  },
];

const Orders = () => {
  return (
    <section className="orders-page">
      <div className="container">
        <div className="orders-header">
          <h1>My Orders</h1>
          <p>Track and manage your purchases</p>
        </div>

        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div>
                <h3>#{order.id}</h3>
                <p>{order.date}</p>
              </div>

              <div>
                <h4>₹{order.total.toLocaleString()}</h4>
              </div>

              <div>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>

              <button className="view-order-btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Orders;
