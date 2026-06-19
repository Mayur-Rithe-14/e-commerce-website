import {useContext} from "react";
import {ProductContext} from "../../context/ProductContext";
import {Link} from "react-router-dom";

import "../../components/products/FeaturedProducts.css";

const Products = () => {
  const {products} = useContext(ProductContext);

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h1>All Products</h1>
          <p>Browse our complete collection</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>

              <h3>{product.name}</h3>

              <h4>₹{Number(product.price).toLocaleString()}</h4>

              <Link to={`/product/${product.id}`} className="cart-btn">
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
