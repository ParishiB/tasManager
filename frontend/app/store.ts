// store.ts
import create from "zustand";

interface Task {
  _id: string;
  title: string;
  description?: string;
  status?: string;
  priority?: string;
  deadline?: string;
}

interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));

export default useTaskStore;
