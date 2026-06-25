import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="shop-header">
          <h1>Contact Us</h1>
          <p>We would love to hear from you</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Email</h3>
            <p>mayurrithe2004@gmail.com</p>

            <h3>Phone</h3>
            <p>+91 8483046790</p>

            <h3>Address</h3>
            <p>Mumbai, Maharashtra, India</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="6" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
