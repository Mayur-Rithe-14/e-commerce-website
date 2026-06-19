import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;
