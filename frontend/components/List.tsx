"use client";

import React, { useState, useEffect } from "react";
import { IoFilterOutline } from "react-icons/io5";
import axios from "axios";
import useTaskStore from "../app/store";

const getPriorityClass = (priority: any) => {
  switch (priority) {
    case "High":
      return "bg-red-500";
    case "Medium":
      return "bg-yellow-500";
    case "Low":
      return "bg-green-500";
    default:
      return "bg-gray-300";
  }
};

interface Task {
  _id: string;
  title: string;
  description?: string;
  status?: string;
  priority?: string;
  deadline?: string;
}

const fetchAllTasks = async (): Promise<Task[]> => {
  try {
    // Retrieve token from local storage
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found in local storage");
    }

    const { data } = await axios.get<Task[]>(
      "http://localhost:4000/task/allTasks",
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use token from local storage
        },
      }
    );

    console.log("The data is", data);
    return data;
  } catch (error: any) {
    console.error(
      "Error fetching tasks:",
      error.response?.data || error.message
    );
    return [];
  }
};

const updateTaskStatus = async (taskId: string, newStatus: string) => {
  try {
    console.log(`Attempting to update task ${taskId} to status ${newStatus}`);

    // Retrieve token from local storage
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found in local storage");
    }

    const response = await axios.patch(
      `http://localhost:4000/task/updateTask/${taskId}`,
      { status: newStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use token from local storage
        },
      }
    );

    console.log(`Task update response:`, response.data);
  } catch (error: any) {
    console.error(
      "Error updating task status:",
      error.response?.data || error.message
    );
  }
};

const List = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const { tasks, setTasks } = useTaskStore();

  useEffect(() => {
    const loadTasks = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const { data } = await axios.get(
          "http://localhost:4000/task/allTasks",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:");
      }
    };

    loadTasks();
  }, [setTasks]);
  // useEffect(() => {
  //   const loadTasks = async () => {
  //     const tasksFromServer = await fetchAllTasks();
  //     setTasks(tasksFromServer);
  //   };
  //   loadTasks();
  // }, []);

  const taskGroups = tasks.reduce((acc, task) => {
    const status = task.status || "Unknown";
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  const handleDragStart = (task: Task, e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData("text/plain", task._id);
    setDraggedTask(task);
  };

  const handleDrop = async (
    status: string,
    e: React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    if (draggedTask) {
      console.log(`Dropping task ${draggedTask._id} into ${status}`);
      await updateTaskStatus(draggedTask._id, status);
      const updatedTasks = tasks.map((task) =>
        task._id === draggedTask._id ? { ...task, status } : task
      );
      setTasks(updatedTasks);
      setDraggedTask(null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Essential to allow drop
  };

  return (
    <div className="flex bg-white  rounded-2xl">
      <div className="grid grid-cols-4 gap-4 w-full ">
        {["To do", "In progress", "Under review", "Finished"].map((status) => (
          <div
            key={status}
            className="p-4  rounded-lg "
            onDrop={(e) => handleDrop(status, e)}
            onDragOver={handleDragOver}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="font-extralight">{status}</div>
              <div className="text-gray-500">
                <IoFilterOutline />
              </div>
            </div>
            <ul>
              {taskGroups[status]?.map((task) => (
                <li
                  key={task._id}
                  className="py-2 px-4 mb-2 bg-slate-200 rounded-lg shadow-sm border"
                  draggable
                  onDragStart={(e) => handleDragStart(task, e)}
                >
                  <div className="font-semibold text-sm text-gray-800">
                    {task.title}
                  </div>
                  <div className="text-sm text-gray-400 font-extralight">
                    {task.description}
                  </div>
                  <button
                    className={`text-white py-2 px-4 text-xs p-1 rounded ${getPriorityClass(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </button>
                </li>
              ))}
              {tasks.length > 0 ? (
                <>
                  <button className="flex justify-between bg-black text-white py-2 px-4 mb-2 rounded-lg w-full">
                    <div>Create new</div>
                    <div>+</div>
                  </button>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
