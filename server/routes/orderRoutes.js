const express = require("express");

const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getMyOrders,
} = require("../controllers/orderController");

const {protect} = require("../middleware/authMiddleware");
const {adminOnly} = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/my-orders", protect, getMyOrders);
router.get("/", protect, adminOnly, getOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id", protect, adminOnly, updateOrder);
router.delete("/:id", protect, adminOnly, deleteOrder);

module.exports = router;
