import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "Amazing quality products and super fast delivery. Highly recommended!",
    },
    {
      name: "Priya Patel",
      review:
        "The shopping experience was smooth and customer support was excellent.",
    },
    {
      name: "Aman Singh",
      review:
        "Best electronics store I've used. Great prices and genuine products.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Trusted by thousands of happy customers</p>
        </div>

        <div className="testimonial-grid">
          {reviews.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">⭐⭐⭐⭐⭐</div>

              <p className="review">"{item.review}"</p>

              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
