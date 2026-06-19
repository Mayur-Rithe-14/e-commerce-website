import {createContext, useEffect, useState} from "react";
import API from "../services/api";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET ALL PRODUCTS
  const fetchProducts = async () => {
    try {
      const {data} = await API.get("/products");

      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ADD PRODUCT
  const addProduct = async (productData) => {
    try {
      const {data} = await API.post("/products", productData);

      setProducts((prev) => [...prev, data]);

      return data;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  };

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    try {
      await API.delete(`/products/${id}`);

      setProducts((prev) => prev.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  };

  // UPDATE PRODUCT
  const updateProduct = async (id, updatedData) => {
    try {
      const {data} = await API.put(`/products/${id}`, updatedData);

      setProducts((prev) =>
        prev.map((product) => (product._id === id ? data : product)),
      );

      return data;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
        addProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
