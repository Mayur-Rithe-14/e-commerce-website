import {useState, useContext, useEffect} from "react";
import {useLocation} from "react-router-dom";

import "./Shop.css";

import {ProductContext} from "../../context/ProductContext";
import {SearchContext} from "../../context/SearchContext";
import ProductCard from "../../components/products/ProductCard";

const Shop = () => {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const {searchTerm} = useContext(SearchContext);
  const {products} = useContext(ProductContext);

  const categories = ["all", "phone", "laptop", "camera", "watch", "audio"];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");

    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;

      const searchMatch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "low":
          return a.price - b.price;

        case "high":
          return b.price - a.price;

        case "az":
          return a.name.localeCompare(b.name);

        case "za":
          return b.name.localeCompare(a.name);

        default:
          return 0;
      }
    });

  return (
    <section className="shop-page">
      {" "}
      <div className="container">
        {" "}
        <div className="shop-header">
          {" "}
          <h1>Shop</h1> <p>Explore our latest electronics</p>{" "}
        </div>
        <div className="shop-layout">
          {/* Sidebar */}
          <aside className="shop-sidebar">
            <h3>Categories</h3>

            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active-filter" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </aside>

          {/* Products */}
          <div className="shop-products">
            <div className="shop-topbar">
              <div className="products-count">
                {filteredProducts.length} Products Found
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="az">Name: A-Z</option>
                <option value="za">Name: Z-A</option>
              </select>
            </div>

            <div className="products-grid">
              {filteredProducts.length === 0 ? (
                <div className="no-products">
                  <h2>No Products Found 😔</h2>
                </div>
              ) : (
                <div className="shop-products-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
