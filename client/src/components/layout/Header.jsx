import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

import {Link} from "react-router-dom";
import {useContext, useState} from "react";

import {CartContext} from "../../context/CartContext";
import {WishlistContext} from "../../context/WishlistContext";
import {SearchContext} from "../../context/SearchContext";

import "./Header.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const {cartItems} = useContext(CartContext);
  const {wishlistItems} = useContext(WishlistContext);
  const {searchTerm, setSearchTerm} = useContext(SearchContext);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          {/* Mobile Logo + Menu */}
          <div className="mobile-header-left">
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <FiX /> : <FiMenu />}
            </button>

            <Link to="/" className="logo">
              <h2>E-Mart</h2>
            </Link>
          </div>

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

          {/* Header Icons */}
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

      {/* Desktop Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
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
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/shop" onClick={closeMenu}>
            Shop
          </Link>

          <Link to="/my-orders" onClick={closeMenu}>
            My Orders
          </Link>

          <Link to="/wishlist" onClick={closeMenu}>
            Wishlist
          </Link>

          <Link to="/account" onClick={closeMenu}>
            My Account
          </Link>

          <Link to="/blog" onClick={closeMenu}>
            Blog
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
