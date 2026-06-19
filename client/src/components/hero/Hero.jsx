import "./Hero.css";

import heroLaptop from "../../assets/images/hero-laptop.png";
import smartwatch from "../../assets/images/smartwatch.png";
import headphones from "../../assets/images/headphone.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Main Hero */}
        <div className="hero-main">
          <div className="hero-content">
            <span className="hero-badge">SALE UP TO 30% OFF</span>

            <h1>Smart Electronics Collection 2026</h1>

            <p>
              Discover premium gadgets, laptops, smart watches, headphones and
              accessories at amazing prices.
            </p>

            <button className="hero-btn">Shop Now</button>
          </div>

          <div className="hero-image">
            <img src={heroLaptop} alt="Laptop" />
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="hero-side">
          <div className="promo-card">
            <div className="promo-content">
              <h4>Smart Watches</h4>
              <p>Up To 40% Off</p>
            </div>
            <div className="promo-image">
              <img src={smartwatch} alt="Smart Watch" />
            </div>
          </div>

          <div className="promo-card">
            <div className="promo-content">
              <h4>Headphones</h4>
              <p>New Collection</p>
            </div>
            <div className="promo-image">
              <img src={headphones} alt="Headphones" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
