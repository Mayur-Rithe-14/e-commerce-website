import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchProvider from "./context/SearchContext";
import OrderProvider from "./context/OrderContext";

import App from "./App";
import "./styles/global.css";
import "./styles/toast.css";
import ProductProvider from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <SearchProvider>
          <ProductProvider>
            <OrderProvider>
              <App />

              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                theme="light"
              />
            </OrderProvider>
          </ProductProvider>
        </SearchProvider>
      </WishlistProvider>
    </CartProvider>
  </BrowserRouter>,
);
