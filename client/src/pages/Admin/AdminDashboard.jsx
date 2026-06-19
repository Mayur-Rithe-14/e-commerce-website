import {useEffect, useState} from "react";
import {
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";

import API from "../../services/api";
import AdminLayout from "../../components/admin/AdminLayout";

import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsRes, productsRes] = await Promise.all([
          API.get("/admin/stats"),
          API.get("/products"),
        ]);

        setStats(statsRes.data);
        setProducts(productsRes.data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <AdminLayout>
      {/* Header */}
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Manage your store and monitor performance.</p>
      </div>

      {/* Stats Cards */}
      <div className="admin-stats">
        <div className="stat-card">
          <FiShoppingBag />
          <h2>{stats.totalProducts}</h2>
          <p>Total Products</p>
        </div>

        <div className="stat-card">
          <FiPackage />
          <h2>{stats.totalOrders}</h2>
          <p>Total Orders</p>
        </div>

        <div className="stat-card">
          <FiUsers />
          <h2>{stats.totalUsers}</h2>
          <p>Total Users</p>
        </div>

        <div className="stat-card">
          <FiDollarSign />
          <h2>₹{stats.totalRevenue.toLocaleString()}</h2>
          <p>Revenue</p>
        </div>
      </div>

      {/* Latest Products */}
      <div className="admin-section">
        <h2>Latest Products</h2>

        <div className="admin-table">
          <div className="table-head">
            <span>Name</span>
            <span>Category</span>
            <span>Price</span>
          </div>

          {loading ? (
            <div className="table-row">
              <span>Loading...</span>
            </div>
          ) : products.length === 0 ? (
            <div className="table-row">
              <span>No Products Found</span>
            </div>
          ) : (
            products
              .slice()
              .reverse()
              .slice(0, 5)
              .map((product) => (
                <div className="table-row" key={product._id}>
                  <span>{product.name}</span>

                  <span>{product.category}</span>

                  <span>
                    ₹{Number(product.price).toLocaleString("en-IN")}
                  </span>
                </div>
              ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;