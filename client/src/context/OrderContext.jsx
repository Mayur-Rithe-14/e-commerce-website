import {createContext, useEffect, useState} from "react";
import API from "../services/api";

export const OrderContext = createContext();

const OrderProvider = ({children}) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // GET MY ORDERS
  const fetchOrders = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        setOrders([]);
        return;
      }

      const user = JSON.parse(localStorage.getItem("user"));

      let endpoint = "/orders/my-orders";

      if (user?.role === "admin" || user?.isAdmin === true) {
        endpoint = "/orders";
      }

      const {data} = await API.get(endpoint);

      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // PLACE ORDER
  const placeOrder = async (orderData) => {
    try {
      const {data} = await API.post("/orders", orderData);

      setOrders((prev) => [data, ...prev]);

      return data;
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  };

  // UPDATE ORDER STATUS (ADMIN)
  const updateOrderStatus = async (id, status) => {
    try {
      const {data} = await API.put(`/orders/${id}`, {
        status,
      });

      setOrders((prev) =>
        prev.map((order) => (order._id === id ? data : order)),
      );

      return data;
    } catch (error) {
      console.error("Error updating order:", error);
      throw error;
    }
  };

  // DELETE ORDER (ADMIN)
  const deleteOrder = async (id) => {
    try {
      await API.delete(`/orders/${id}`);

      setOrders((prev) => prev.filter((order) => order._id !== id));
    } catch (error) {
      console.error("Error deleting order:", error);
      throw error;
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        loading,
        fetchOrders,
        placeOrder,
        updateOrderStatus,
        deleteOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
