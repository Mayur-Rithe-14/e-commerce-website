import "./DealBanner.css";

import tv from "../../assets/images/tv.png";

const DealBanner = () => {
  return (
    <section className="deal-banner-section">
      <div className="container">
        <div className="deal-banner">
          <div className="deal-content">
            <span className="deal-tag">LIMITED OFFER</span>
            <h2>Deal Of The Week</h2>
            <h3>Smart TV Collection</h3>
            <p>
              Get up to 50% OFF on premium Smart TVs and home entertainment.
            </p>
            <button>Shop Now</button>
          </div>
          <div className="deal-image">
            <img src={tv} alt="TV" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealBanner;
