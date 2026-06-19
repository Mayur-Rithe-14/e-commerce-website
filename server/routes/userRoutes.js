const express = require("express");

const router = express.Router();

const {
  getUsers,
  deleteUser,
  updateRole,
} = require("../controllers/userController");

const {protect} = require("../middleware/authMiddleware");
const {adminOnly} = require("../middleware/adminMiddleware");

router.get("/", protect, adminOnly, getUsers);

router.delete("/:id", protect, adminOnly, deleteUser);

router.put("/:id/role", protect, adminOnly, updateRole);

module.exports = router;
