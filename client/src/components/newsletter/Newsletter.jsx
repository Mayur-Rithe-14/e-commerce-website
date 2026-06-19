import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-box">
          <div className="newsletter-content">
            <span>JOIN OUR COMMUNITY</span>

            <h2>Subscribe To Our Newsletter</h2>

            <p>
              Get exclusive offers, product launches, discounts and tech news
              directly in your inbox.
            </p>
          </div>

          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />

            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
