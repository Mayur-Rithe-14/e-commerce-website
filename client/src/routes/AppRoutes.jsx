import {Routes, Route} from "react-router-dom";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Account from "../pages/Account/Account";
import Wishlist from "../pages/Wishlist/Wishlist";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import Orders from "../pages/Orders/Orders";
import MyOrders from "../pages/MyOrders/MyOrders";

import Products from "../pages/Products/Products";
import BestSeller from "../pages/BestSeller/BestSeller";
import NewArrivals from "../pages/NewArrivals/NewArrivals";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminProducts from "../pages/AdminProducts/AdminProducts";
import AdminOrders from "../pages/AdminOrders/AdminOrders";
import AdminAddProduct from "../pages/AdminAddProduct/AdminAddProduct";
import AdminCustomers from "../pages/AdminCustomers/AdminCustomers";
import AdminAnalytics from "../pages/AdminAnalytics/AdminAnalytics";
import AdminSettings from "../pages/AdminSettings/AdminSettings";
import AdminEditProduct from "../pages/AdminEditProduct/AdminEditProduct";

import AdminRoute from "../components/admin/AdminRoute";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/orders" element={<Orders />} />
      <Route
        path="/my-orders"
        element={
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/best-sellers" element={<BestSeller />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />

      {/* Admin Protected Routes */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <AdminRoute>
            <AdminProducts />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/add-product"
        element={
          <AdminRoute>
            <AdminAddProduct />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/edit-product/:id"
        element={
          <AdminRoute>
            <AdminEditProduct />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <AdminRoute>
            <AdminOrders />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/customers"
        element={
          <AdminRoute>
            <AdminCustomers />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/analytics"
        element={
          <AdminRoute>
            <AdminAnalytics />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <AdminRoute>
            <AdminSettings />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
