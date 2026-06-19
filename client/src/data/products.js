import phone from "../assets/images/phone.png";
import camera from "../assets/images/camera.png";
import smartwatch from "../assets/images/smartwatch.png";
import headphones from "../assets/images/headphone.png";

const products = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    image: phone,
    category: "phone",
    price: 89999,
    rating: 4.8,
    reviews: 128,
    stock: true,
    discount: 15,
  },

  {
    id: 2,
    name: "Canon DSLR",
    image: camera,
    category: "camera",
    price: 54999,
    rating: 4.4,
    reviews: 188,
    stock: true,
    discount: 20,
  },

  {
    id: 3,
    name: "Apple Watch Ultra",
    image: smartwatch,
    category: "watch",
    price: 12999,
    rating: 3.8,
    reviews: 28,
    stock: true,
    discount: 10,
  },

  {
    id: 4,
    name: "Wireless Headphones",
    image: headphones,
    category: "audio",
    price: 4999,
    rating: 3.0,
    reviews: 1028,
    stock: true,
    discount: 40,
  },
];

export default products;
