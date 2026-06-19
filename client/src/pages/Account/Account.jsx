import {useState} from "react";
import {FiPackage, FiHeart, FiShoppingCart, FiLogOut} from "react-icons/fi";

import {useNavigate} from "react-router-dom";

import MyOrders from "../MyOrders/MyOrders";
import Wishlist from "../Wishlist/Wishlist";

import "./Account.css";

const Account = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <section className="account-page">
      <div className="container">
        <h1 className="account-title">My Account</h1>

        <div className="account-layout">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <ul>
              <li
                className={activeTab === "dashboard" ? "active" : ""}
                onClick={() => setActiveTab("dashboard")}
              >
                <FiPackage />
                Dashboard
              </li>

              <li
                className={activeTab === "orders" ? "active" : ""}
                onClick={() => setActiveTab("orders")}
              >
                <FiPackage />
                My Orders
              </li>

              <li
                className={activeTab === "wishlist" ? "active" : ""}
                onClick={() => setActiveTab("wishlist")}
              >
                <FiHeart />
                Wishlist
              </li>

              <li className="logout-item" onClick={handleLogout}>
                <FiLogOut />
                Logout
              </li>
            </ul>
          </aside>

          {/* Content */}
          <div className="account-content">
            {activeTab === "dashboard" && (
              <>
                <div className="account-cards">
                  <div className="account-card">
                    <FiPackage />
                    <h3>12</h3>
                    <p>Total Orders</p>
                  </div>

                  <div className="account-card">
                    <FiHeart />
                    <h3>8</h3>
                    <p>Wishlist Items</p>
                  </div>

                  <div className="account-card">
                    <FiShoppingCart />
                    <h3>3</h3>
                    <p>Cart Items</p>
                  </div>
                </div>

                <div className="account-welcome">
                  <h2>Welcome Back 👋</h2>

                  <p>
                    Manage your orders, wishlist, and account information from
                    your dashboard.
                  </p>
                </div>
              </>
            )}

            {activeTab === "orders" && <MyOrders />}

            {activeTab === "wishlist" && <Wishlist />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
