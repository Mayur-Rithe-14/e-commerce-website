import "./Categories.css";

import laptop from "../../assets/images/hero-laptop.png";
import phone from "../../assets/images/phone.png";
import smartwatch from "../../assets/images/smartwatch.png";
import camera from "../../assets/images/camera.png";
import headphones from "../../assets/images/headphone.png";
import tv from "../../assets/images/tv.png";
import speaker from "../../assets/images/speakers.png";
import gamingLaptop from "../../assets/images/gaming-laptop.png";

import {Link} from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Laptops",
      image: laptop,
      slug: "laptop",
    },
    {
      name: "Smartphones",
      image: phone,
      slug: "phone",
    },
    {
      name: "Smart Watches",
      image: smartwatch,
      slug: "watch",
    },
    {
      name: "Cameras",
      image: camera,
      slug: "camera",
    },
    {
      name: "Headphones",
      image: headphones,
      slug: "audio",
    },
    {
      name: "Smart TVs",
      image: tv,
      slug: "tv",
    },
    {
      name: "Audio",
      image: speaker,
      slug: "audio",
    },
    {
      name: "Gaming",
      image: gamingLaptop,
      slug: "gaming",
    },
  ];

  return (
    <section className="categories">
      <div className="container">
        <div className="section-header">
          <h2>Top Categories</h2>
          <p>Explore our most popular categories</p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/shop?category=${category.slug}`}
              className="category-card"
            >
              <img src={category.image} alt={category.name} />

              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
