import {useContext} from "react";
import {ProductContext} from "../../context/ProductContext";
import {Link} from "react-router-dom";

const NewArrivals = () => {
  const {products} = useContext(ProductContext);

  const latestProducts = [...products].sort((a, b) => b.id - a.id);

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h1>New Arrivals</h1>
          <p>Recently added products</p>
        </div>

        <div className="products-grid">
          {latestProducts.map((product) => (
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

export default NewArrivals;
