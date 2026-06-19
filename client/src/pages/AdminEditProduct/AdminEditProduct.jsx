import {useContext, useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

import AdminLayout from "../../components/admin/AdminLayout";
import {ProductContext} from "../../context/ProductContext";

import "./AdminEditProduct.css";

const AdminEditProduct = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const {products, updateProduct, loading} = useContext(ProductContext);
  const existingProduct = products.find((product) => product._id === id);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (existingProduct) {
      setFormData({
        name: existingProduct.name || "",
        price: existingProduct.price || "",
        stock: existingProduct.stock || "",
        category: existingProduct.category || "",
        description: existingProduct.description || "",
        image: existingProduct.image || "",
      });
    }
  }, [existingProduct]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProduct(id, {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      });

      toast.success("Product Updated Successfully");

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      toast.error("Failed To Update Product");
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading...</h2>
      </AdminLayout>
    );
  }

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading...</h2>
      </AdminLayout>
    );
  }

  if (!existingProduct && products.length > 0) {
    return (
      <AdminLayout>
        <h2>Product Not Found</h2>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="add-product-header">
        <h1>Edit Product</h1>
        <p>Update product information</p>
      </div>

      <form className="add-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="watch">Watch</option>
          <option value="audio">Audio</option>
          <option value="camera">Camera</option>
        </select>

        <textarea
          name="description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Update Product</button>
      </form>
    </AdminLayout>
  );
};

export default AdminEditProduct;
