const TaskModel = require("./../models/Task"); // Adjust the path as needed

async function createTask(req, res) {
  const { title, description, status, priority, deadline } = req.body;

  try {
    const newTask = new TaskModel({
      title,
      description,
      status,
      priority,
      deadline: deadline ? new Date(deadline) : null,
    });

    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({
      message: "Unknown error creating task",
      error: error.message || "Unknown error",
    });
  }
}

/**
 * Update an existing task
 * @param {Request} req
 * @param {Response} res
 */
// Update this function in your backend code
async function updateTask(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  console.log(`Received update request for task ${id} with status ${status}`); // Debugging line

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      console.log(`Task ${id} not found`); // Debugging line
      return res.status(404).json({ message: "Task not found" });
    }

    console.log(`Task ${id} successfully updated to status ${status}`); // Debugging line
    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error); // Debugging line
    res.status(500).json({
      message: "Unknown error updating task",
      error: error.message || "Unknown error",
    });
  }
}

/**
 * Delete a task
 * @param {Request} req
 * @param {Response} res
 */
async function deleteTask(req, res) {
  const { id } = req.params;

  try {
    const deletedTask = await TaskModel.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: "Unknown error deleting task",
      error: error.message || "Unknown error",
    });
  }
}

async function getAllTasks(req, res) {
  try {
    const tasks = await TaskModel.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Unknown error fetching tasks",
      error: error.message || "Unknown error",
    });
  }
}

module.exports = { createTask, updateTask, deleteTask, getAllTasks };
