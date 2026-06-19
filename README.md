# 🛒 MERN E-Commerce Store

A full-stack E-Commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This project provides a modern shopping experience with user authentication, product management, order management, admin dashboard, analytics, cart, wishlist, and responsive UI.

---

## 🚀 Features

### 👤 User Features

- User Registration & Login
- JWT Authentication
- Browse Products
- Product Details Page
- Search Products
- Filter Products by Category
- Add to Cart
- Update Cart Quantity
- Wishlist Management
- Secure Checkout
- Place Orders
- View My Orders
- Responsive Design

---

### 🛠 Admin Features

- Admin Login Access
- Admin Dashboard
- Product Management
  - Add Product
  - Edit Product
  - Delete Product

- Order Management
  - View Orders
  - Update Order Status
  - Delete Orders

- Customer Management
- Analytics Dashboard
- Revenue Tracking
- Store Statistics

---

## 🧰 Tech Stack

### Frontend

- React.js
- React Router DOM
- Context API
- Axios
- React Icons
- React Toastify
- Recharts
- CSS3

### Backend

- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database

- MongoDB Atlas
- Mongoose ODM

### Deployment

- Render (Backend)
- Render Static Site (Frontend)

---

## 📂 Project Structure

### Frontend

```bash
client/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── assets/
│   └── App.jsx
│
└── package.json
```

### Backend

```bash
server/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── server.js
└── package.json
```

---

## 🔑 Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_ATLAS_URI

JWT_SECRET=YOUR_SECRET_KEY

ADMIN_EMAIL=admin@example.com
```

### Frontend (.env)

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/mern-ecommerce-store.git

cd mern-ecommerce-store
```

---

### Backend Setup

```bash
cd server

npm install

npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 📊 Admin Dashboard Metrics

- Total Products
- Total Orders
- Total Customers
- Total Revenue
- Revenue Analytics
- Orders Analytics

---

## 🔐 Authentication

The project uses:

- JWT Authentication
- Protected Routes
- Admin Protected Routes
- Role-Based Access Control

---

## 📦 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Products

```http
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Orders

```http
POST   /api/orders
GET    /api/orders/my-orders
GET    /api/orders
PUT    /api/orders/:id
DELETE /api/orders/:id
```

### Admin

```http
GET /api/admin/stats
```

---

## 📱 Responsive Design

The application is optimized for:

- Desktop
- Tablet
- Mobile Devices

---

## 🎯 Future Improvements

- Online Payment Gateway Integration
- Product Reviews & Ratings
- Coupon System
- Inventory Alerts
- Email Notifications
- Sales Reports Export
- Dark Mode
- Multi-Vendor Support

---

## 👨‍💻 Author

Developed by:

**MERN Stack Developer**

- MongoDB
- Express.js
- React.js
- Node.js

---

## 📄 License

This project is licensed under the MIT License.
