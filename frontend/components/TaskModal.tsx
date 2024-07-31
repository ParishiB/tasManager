import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CiCalendar, CiShare2 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { PiWarningDiamondLight } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { RiLoader2Line } from "react-icons/ri";
import axios from "axios";
import useTaskStore from "../app/store";

const data2 = [
  { id: 1, icon: <RiLoader2Line />, txt: "Status" },
  { id: 2, icon: <PiWarningDiamondLight />, txt: "Priority" },
  { id: 3, icon: <CiCalendar />, txt: "Deadline" },
  { id: 4, icon: <GoPencil />, txt: "Description" },
];

interface TaskModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Task {
  _id: string;
  title: string;
  description?: string;
  status?: string;
  priority?: string;
  deadline?: string;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onOpenChange }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<any[]>([]);
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const addTask = useTaskStore((state: any) => state.addTask);
  useEffect(() => {
    fetchTasks();
  }, [isOpen]);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authorization token found");
      }

      const response = await axios.post(
        "http://localhost:4000/task/createTask",
        {
          title,
          description,
          status,
          priority,
          deadline,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Task created:", response.data);
      onOpenChange(false);
      window.location.reload();
    } catch (error: any) {
      console.error(
        "Error creating task:",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (!isOpen) return null;
  const fetchTasks = async (): Promise<Task[]> => {
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

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center space-x-2">
            <Button
              className="p-1 text-gray-500 hover:text-gray-700"
              onClick={() => onOpenChange(false)}
            >
              <RxCross2 />
            </Button>
            <Button className="p-1 text-gray-500 hover:text-gray-700">
              <BsArrowsAngleExpand />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button className="p-1 text-gray-500 hover:text-gray-700">
              <CiShare2 /> Share
            </Button>
            <Button className="p-1 text-gray-500 hover:text-gray-700">
              <FaRegStar /> Favourite
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-2">
              <RiLoader2Line />
              <span className="font-medium">Status</span>
              <input
                placeholder="Not selected"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="ml-auto w-full p-1 rounded"
              />
            </div>
            <div className="flex items-center space-x-2 p-2">
              <PiWarningDiamondLight />
              <span className="font-medium">Priority</span>
              <input
                placeholder="Not selected"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="ml-auto w-full p-1 rounded"
              />
            </div>
            <div className="flex items-center space-x-2 p-2">
              <CiCalendar />
              <span className="font-medium">Deadline</span>
              <input
                type="date"
                placeholder="Not selected"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="ml-auto w-full p-1 rounded"
              />
            </div>
            <div className="flex items-center space-x-2 p-2">
              <GoPencil />
              <span className="font-medium">Description</span>
              <input
                placeholder="Not selected"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="ml-auto w-full p-1 rounded"
              />
            </div>
          </div>
          <div className="text-blue-600">+ Add custom property</div>
          <div className="text-gray-600">
            Start writing, or drag your own files here.
          </div>
          <div
            className="bg-[#4c38c2] text-white text-center p-2 font-bold rounded-lg cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
