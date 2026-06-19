import {
  FiTruck,
  FiShield,
  FiRefreshCcw,
  FiHeadphones,
} from "react-icons/fi";

import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: <FiTruck />,
      title: "Free Shipping",
      text: "Orders over ₹999",
    },
    {
      icon: <FiShield />,
      title: "Secure Payment",
      text: "100% Protected",
    },
    {
      icon: <FiRefreshCcw />,
      title: "Easy Returns",
      text: "30 Days Return",
    },
    {
      icon: <FiHeadphones />,
      title: "24/7 Support",
      text: "Dedicated Support",
    },
  ];

  return (
    <section className="features">
      <div className="container features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {item.icon}
            </div>

            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;