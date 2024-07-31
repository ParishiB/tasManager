const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    default: null,
  },
  deadline: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

TaskSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
