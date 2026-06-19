import {useContext} from "react";
import {ProductContext} from "../../context/ProductContext";
import {Link} from "react-router-dom";

import "./BestSeller.css";

const BestSeller = () => {
  const {products} = useContext(ProductContext);

  const bestSellers = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 8);

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h1>Best Sellers</h1>
          <p>Most popular products in our store</p>
        </div>

        <div className="products-grid">
          {bestSellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card"
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <h4>₹{product.price.toLocaleString()}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;