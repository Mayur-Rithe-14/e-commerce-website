import {useEffect, useState} from "react";
import API from "../../services/api";
import AdminLayout from "../../components/admin/AdminLayout";

import "./AdminCustomers.css";

const AdminCustomers = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const {data} = await API.get("/orders");

        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const customers = Object.values(
    orders.reduce((acc, order) => {
      const customerName = order.customer || "Guest User";

      if (!acc[customerName]) {
        acc[customerName] = {
          name: customerName,
          orders: 0,
          spend: 0,
        };
      }

      acc[customerName].orders += 1;

      acc[customerName].spend += Number(order.total || 0);

      return acc;
    }, {}),
  );

  return (
    <AdminLayout>
      <div className="customers-header">
        <h1>Customers</h1>
        <p>Manage your customers and purchases</p>
      </div>

      <div className="customers-table">
        <div className="customers-head">
          <span>Customer</span>
          <span>Orders</span>
          <span>Total Spend</span>
        </div>

        {customers.length === 0 ? (
          <div className="no-customers">No Customers Found</div>
        ) : (
          customers.map((customer, index) => (
            <div className="customers-row" key={index}>
              <span>{customer.name}</span>
              <span>{customer.orders}</span>
              <span>₹{customer.spend.toLocaleString("en-IN")}</span>
            </div>
          ))
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminCustomers;
