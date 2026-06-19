import "./LatestBlogs.css";

import blog1 from "../../assets/images/blogs/blog1.png";
import blog2 from "../../assets/images/blogs/blog2.png";
import blog3 from "../../assets/images/blogs/blog3.png";

import {FiArrowRight} from "react-icons/fi";

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title: "Top 10 Must-Have Gadgets in 2026",
      description:
        "Discover the latest gadgets that are transforming everyday life.",
    },
    {
      id: 2,
      image: blog2,
      title: "Best Smart TVs for Home Entertainment",
      description:
        "Explore premium smart TVs with stunning displays and features.",
    },
    {
      id: 3,
      image: blog3,
      title: "Ultimate Gaming Setup Guide",
      description:
        "Build the perfect gaming station with the best accessories.",
    },
  ];

  return (
    <section className="latest-blogs">
      <div className="container">
        <div className="section-header">
          <h2>Latest Articles</h2>
          <p>News, guides and technology trends</p>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blog-content">
                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <button className="read-more-btn">
                  Read More
                  <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
