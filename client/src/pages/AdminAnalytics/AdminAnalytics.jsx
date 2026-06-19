import {useContext} from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import {ProductContext} from "../../context/ProductContext";
import {OrderContext} from "../../context/OrderContext";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import "./AdminAnalytics.css";

const AdminAnalytics = () => {
  const {products} = useContext(ProductContext);
  const {orders} = useContext(OrderContext);

  const totalRevenue = orders.reduce(
    (total, order) => total + Number(order.total || 0),
    0,
  );

  const uniqueCustomers = new Set(orders.map((order) => order.customer)).size;

  const processingOrders = orders.filter(
    (order) => order.status === "Processing",
  ).length;

  const shippedOrders = orders.filter(
    (order) => order.status === "Shipped",
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered",
  ).length;

  const cancelledOrders = orders.filter(
    (order) => order.status === "Cancelled",
  ).length;

  // Revenue Chart
  const revenueData = [
    {
      name: "Revenue",
      revenue: totalRevenue,
    },
  ];

  // Orders Status Chart
  const ordersData = [
    {
      name: "Processing",
      orders: processingOrders,
    },
    {
      name: "Shipped",
      orders: shippedOrders,
    },
    {
      name: "Delivered",
      orders: deliveredOrders,
    },
    {
      name: "Cancelled",
      orders: cancelledOrders,
    },
  ];

  return (
    <AdminLayout>
      <div className="analytics-header">
        <h1>Store Analytics</h1>
        <p>Track sales and orders performance</p>
      </div>

      {/* Stats */}

      <div className="analytics-stats">
        <div className="analytics-card">
          <h3>{products.length}</h3>
          <p>Total Products</p>
        </div>

        <div className="analytics-card">
          <h3>{orders.length}</h3>
          <p>Total Orders</p>
        </div>

        <div className="analytics-card">
          <h3>{uniqueCustomers}</h3>
          <p>Customers</p>
        </div>

        <div className="analytics-card">
          <h3>₹{totalRevenue.toLocaleString("en-IN")}</h3>
          <p>Revenue</p>
        </div>
      </div>

      {/* Charts */}

      <div className="analytics-grid">
        <div className="chart-card">
          <h3>Total Revenue</h3>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#ff5a3c"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Orders By Status</h3>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={ordersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="orders" fill="#ff5a3c" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
