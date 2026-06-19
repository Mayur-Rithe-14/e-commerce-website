import {useState, useContext} from "react";
import {toast} from "react-toastify";
import AdminLayout from "../../components/admin/AdminLayout";
import {ProductContext} from "../../context/ProductContext";

import "./AdminAddProduct.css";

const AdminAddProduct = () => {
  const {addProduct} = useContext(ProductContext);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await addProduct({
        name: formData.name,
        price: Number(formData.price),
        stock: Number(formData.stock),
        category: formData.category,
        image: formData.image,
        description: formData.description,
      });

      toast.success("Product Added Successfully 🚀");

      setFormData({
        name: "",
        price: "",
        stock: "",
        category: "",
        image: "",
        description: "",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="add-product-header">
        <h1>Add New Product</h1>
        <p>Create a new product for your store</p>
      </div>

      <form className="add-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Available Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>

          <option value="phone">Phone</option>

          <option value="laptop">Laptop</option>

          <option value="watch">Watch</option>

          <option value="audio">Audio</option>

          <option value="camera">Camera</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />

        {formData.image && (
          <div className="image-preview">
            <img src={formData.image} alt="Preview" />
          </div>
        )}

        <textarea
          name="description"
          placeholder="Product Description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </AdminLayout>
  );
};

export default AdminAddProduct;
