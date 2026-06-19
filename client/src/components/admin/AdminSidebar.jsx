import {
  FiGrid,
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

import {Link} from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <h2>E-Shop Admin</h2>
      </div>

      <nav>
        <Link to="/admin" className="admin-link">
          <FiGrid />
          Dashboard
        </Link>

        <Link to="/admin/products" className="admin-link">
          <FiShoppingBag />
          Products
        </Link>

        <Link to="/admin/orders" className="admin-link">
          <FiPackage />
          Orders
        </Link>

        <Link to="/admin/customers" className="admin-link">
          <FiUsers />
          Customers
        </Link>

        <Link to="/admin/analytics" className="admin-link">
          <FiBarChart2 />
          Analytics
        </Link>

        <Link to="/admin/settings" className="admin-link">
          <FiSettings />
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
