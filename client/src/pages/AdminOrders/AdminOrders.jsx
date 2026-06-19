import {useEffect, useState} from "react";
import API from "../../services/api";
import AdminLayout from "../../components/admin/AdminLayout";
import {FiTrash2} from "react-icons/fi";

import "./AdminOrders.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const {data} = await API.get("/orders");

      setOrders(data);
    } catch (error) {
      console.error("Fetch Orders Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await API.put(`/orders/${id}`, {
        status,
      });

      fetchOrders();
    } catch (error) {
      console.error("Update Status Error:", error);

      alert(error?.response?.data?.message || "Failed to update order status");
    }
  };

  const handleDeleteOrder = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?",
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/orders/${id}`);

      fetchOrders();

      alert("Order deleted successfully");
    } catch (error) {
      console.error("Delete Order Error:", error);

      alert(error?.response?.data?.message || "Failed to delete order");
    }
  };

  return (
    <AdminLayout>
      <div className="orders-header">
        <h1>Orders Management</h1>
        <p>Manage customer orders</p>
      </div>

      <div className="orders-table">
        <div className="orders-head">
          <span>Order ID</span>
          <span>Customer</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {loading ? (
          <div className="no-orders">Loading Orders...</div>
        ) : orders.length === 0 ? (
          <div className="no-orders">No Orders Found</div>
        ) : (
          orders.map((order) => (
            <div className="orders-row" key={order._id}>
              <span>#{order._id.slice(-6)}</span>
              <span>{order.customer}</span>
              <span>₹{Number(order.total).toLocaleString("en-IN")}</span>

              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
              >
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>

              <button
                className="delete-btn"
                onClick={() => handleDeleteOrder(order._id)}
              >
                <FiTrash2 />
              </button>
            </div>
          ))
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;
