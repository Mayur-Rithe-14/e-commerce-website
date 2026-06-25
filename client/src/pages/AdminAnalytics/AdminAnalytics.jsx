import {useContext} from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import {ProductContext} from "../../context/ProductContext";
import {OrderContext} from "../../context/OrderContext";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "./AdminAnalytics.css";

const AdminAnalytics = () => {
  const {products} = useContext(ProductContext);
  const {orders} = useContext(OrderContext);

  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.total || 0),
    0,
  );

  const uniqueCustomers = new Set(orders.map((order) => order.customer)).size;

  // Monthly Revenue

  const monthlyRevenue = {};

  orders.forEach((order) => {
    const date = new Date(order.createdAt);

    const month = date.toLocaleString("default", {
      month: "short",
    });

    monthlyRevenue[month] =
      (monthlyRevenue[month] || 0) + Number(order.total || 0);
  });

  const revenueData = Object.keys(monthlyRevenue).map((month) => ({
    month,
    revenue: monthlyRevenue[month],
  }));

  // Order Status

  const ordersData = [
    {
      name: "Processing",
      orders: orders.filter((o) => o.status === "Processing").length,
    },

    {
      name: "Shipped",
      orders: orders.filter((o) => o.status === "Shipped").length,
    },

    {
      name: "Delivered",
      orders: orders.filter((o) => o.status === "Delivered").length,
    },

    {
      name: "Cancelled",
      orders: orders.filter((o) => o.status === "Cancelled").length,
    },
  ];

  // Top Selling Products

  const productSales = {};

  orders.forEach((order) => {
    order.items?.forEach((item) => {
      productSales[item.name] = (productSales[item.name] || 0) + item.quantity;
    });
  });

  const topProducts = Object.entries(productSales)
    .map(([name, sales]) => ({
      name,
      sales,
    }))
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 5);

  return (
    <AdminLayout>
      <div className="analytics-header">
        <h1>Store Analytics</h1>

        <p>Track sales, orders and store performance</p>
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
          <p>Total Customers</p>
        </div>

        <div className="analytics-card">
          <h3>₹{totalRevenue.toLocaleString("en-IN")}</h3>

          <p>Total Revenue</p>
        </div>
      </div>

      {/* Charts */}

      <div className="analytics-grid">
        <div className="chart-card">
          <h3>Revenue Overview</h3>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--primary)"
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

              <YAxis allowDecimals={false} />

              <Tooltip />

              <Bar dataKey="orders" fill="var(--primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="analytics-bottom">
        {/* Top Products */}

        <div className="analytics-table">
          <h3>Top Selling Products</h3>

          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
              </tr>
            </thead>

            <tbody>
              {topProducts.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>

                  <td>{product.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Orders */}

        <div className="analytics-table">
          <h3>Recent Orders</h3>

          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order._id}>
                  <td>{order.customer}</td>

                  <td>{order.status}</td>

                  <td>₹{Number(order.total).toLocaleString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
