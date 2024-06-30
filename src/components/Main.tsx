import { useState } from "react";
import { Task } from "../lib/types";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

export default function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(content: string) {
    const task = {
      id: crypto.randomUUID(),
      content,
      done: false,
    };
    setTasks(tasks.concat(task));
  }

  function toggleTask(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function updateTask(id: string, content: string) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, content } : task)),
    );
  }

  function removeTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <main className="mx-auto flex w-3/4 min-w-60 max-w-96 select-none flex-col">
      <NewTask onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onUpdateTask={updateTask}
        onRemoveTask={removeTask}
      />
    </main>
  );
}
