import "./Blog.css";

import blog1 from "../../assets/images/blogs/blog1.png";
import blog2 from "../../assets/images/blogs/blog2.png";
import blog3 from "../../assets/images/blogs/blog3.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      category: "Smartphones",
      title: "Best Smartphones Under ₹30,000 in 2026",
      description:
        "Discover the top smartphones offering flagship features, excellent cameras, and long battery life without breaking your budget.",
      date: "June 2026",
    },
    {
      id: 2,
      image: blog2,
      category: "Laptops",
      title: "Laptop Buying Guide for Students",
      description:
        "Everything you need to know before purchasing a laptop for coding, studies, and daily productivity.",
      date: "June 2026",
    },
    {
      id: 3,
      image: blog3,
      category: "Technology",
      title: "Future of Smart Gadgets & AI Devices",
      description:
        "Explore how artificial intelligence is transforming smart homes, wearables, and everyday electronics.",
      date: "June 2026",
    },
  ];

  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-hero">
          <h1>Tech Blog</h1>
          <p>
            Latest technology trends, gadget reviews, buying guides, and
            industry insights.
          </p>
        </div>

        <div className="featured-blog">
          <div className="featured-content">
            <span>FEATURED ARTICLE</span>
            <h2>The Ultimate Electronics Buying Guide 2026</h2>
            <p>
              Learn how to choose the perfect gadgets, compare products,
              understand specifications, and get the best value for your money.
            </p>

            <button>Read Full Guide</button>
          </div>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />

              <div className="blog-content">
                <span className="blog-category">{blog.category}</span>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <div className="blog-footer">
                  <span>{blog.date}</span>

                  <button>Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-newsletter">
          <h2>Stay Updated</h2>

          <p>
            Subscribe to receive the latest technology news, product launches,
            and exclusive offers.
          </p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email address" />

            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
