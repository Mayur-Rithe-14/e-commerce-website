import {FiEdit, FiTrash2, FiPlus} from "react-icons/fi";
import {Link} from "react-router-dom";
import {useContext} from "react";

import AdminLayout from "../../components/admin/AdminLayout";
import {ProductContext} from "../../context/ProductContext";

import "./AdminProducts.css";

const AdminProducts = () => {
  const {products, deleteProduct, loading} = useContext(ProductContext);

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading Products...</h2>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="products-header">
        <div>
          <h1>Products Management</h1>
          <p>Manage your store products • {products.length} Products</p>
        </div>

        <Link to="/admin/add-product" className="add-product-btn">
          <FiPlus />
          Add Product
        </Link>
      </div>

      <div className="products-table">
        <div className="products-head">
          <span>Product</span>
          <span>Category</span>
          <span>Price</span>
          <span>Stock</span>
          <span>Actions</span>
        </div>

        {products.map((product) => (
          <div className="products-row" key={product._id}>
            <div className="product-info">
              <img src={product.image} alt={product.name} />

              <div className="product-details">
                <h4>{product.name}</h4>
                <p>ID: {product._id}</p>
              </div>
            </div>

            <span className="category-cell">{product.category}</span>

            <span className="price-cell">
              ₹{Number(product.price).toLocaleString("en-IN")}
            </span>

            <span
              className={`stock-badge ${
                Number(product.stock) > 0 ? "in-stock" : "out-stock"
              }`}
            >
              {Number(product.stock) > 0
                ? `${product.stock} In Stock`
                : "Out Of Stock"}
            </span>

            <div className="actions">
              <Link
                to={`/admin/edit-product/${product._id}`}
                className="edit-btn"
              >
                <FiEdit />
              </Link>

              <button
                className="delete-btn"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this product?",
                    )
                  ) {
                    deleteProduct(product._id);
                  }
                }}
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
