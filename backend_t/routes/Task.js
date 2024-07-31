const express = require("express");
const {
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
} = require("../controller/Task");
const {
  authMiddleware,
  authenticateToken,
} = require("../middleware/Authenticate");

const router = express.Router();

router.route("/createTask").post(authenticateToken, createTask);
router.route("/updateTask/:id").patch(authenticateToken, updateTask);
router.route("/tasks/:id").delete(authenticateToken, deleteTask);
router.route("/allTasks").get(authenticateToken, getAllTasks);

module.exports = router;
