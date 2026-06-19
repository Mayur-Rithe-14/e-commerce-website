import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
} from "react-icons/fi";

import {Link} from "react-router-dom";
import {useContext} from "react";

import {CartContext} from "../../context/CartContext";
import {WishlistContext} from "../../context/WishlistContext";
import {SearchContext} from "../../context/SearchContext";

import "./Header.css";

const Header = () => {
  const {cartItems} = useContext(CartContext);
  const {wishlistItems} = useContext(WishlistContext);
  const {searchTerm, setSearchTerm} = useContext(SearchContext);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* Main Header */}
      <header className="header">
        <div className="container header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <h2>E-Shop</h2>
          </Link>

          {/* Search */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button>
              <FiSearch />
            </button>
          </div>

          {/* Icons */}
          <div className="header-icons">
            <Link to="/account" className="icon-box">
              <FiUser />
            </Link>

            <Link to="/wishlist" className="icon-box">
              <FiHeart />
              {wishlistItems.length > 0 && <span>{wishlistItems.length}</span>}
            </Link>

            <Link to="/cart" className="icon-box">
              <FiShoppingCart />
              {cartCount > 0 && <span>{cartCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="categories-btn">
            <FiMenu />
            <span>All Categories</span>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/my-orders">My Orders</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/best-sellers">Best Seller</Link>
            </li>

            <li>
              <Link to="/new-arrivals">New Arrivals</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
