import {useState, useEffect} from "react";
import {FiArrowUp} from "react-icons/fi";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    show && (
      <button className="scroll-top-btn" onClick={scrollTop}>
        <FiArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
