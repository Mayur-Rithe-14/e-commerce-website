import "./Footer.css";
import {FiFacebook, FiInstagram, FiLinkedin, FiYoutube} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-col">
            <h2 className="footer-logo">ElectroMart</h2>
            <p>
              Your trusted destination for premium electronics, gadgets, and
              accessories.
            </p>
            <div className="social-links">
              <a href="#">
                <FiFacebook />
              </a>

              <a href="#">
                <FiInstagram />
              </a>

              <a href="#">
                <FiLinkedin />
              </a>

              <a href="#">
                <FiYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>

            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Categories</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-col">
            <h3>Customer Service</h3>

            <ul>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3>Contact</h3>

            <ul>
              <li>support@electromart.com</li>
              <li>+91 9876543210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ElectroMart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
