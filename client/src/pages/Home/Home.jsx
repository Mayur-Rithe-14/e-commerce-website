import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import FeaturedProducts from "../../components/products/FeaturedProducts";
import Categories from "../../components/categories/Categories";
import DealBanner from "../../components/banners/DealBanner";
import BestSellers from "../../components/products/BestSellers";
import Testimonials from "../../components/testimonials/Testimonials";
import LatestBlogs from "../../components/blog/LatestBlogs";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Categories />
      <DealBanner />
      <BestSellers />
      <Testimonials />
      <LatestBlogs />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
