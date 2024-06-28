import TaskItem from "./TaskItem";
import { Task } from "../lib/types";

export default function TaskList({
  tasks,
  onToggleTask,
  onUpdateTask,
  onRemoveTask,
}: {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onUpdateTask: (id: string, content: string) => void;
  onRemoveTask: (id: string) => void;
}) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          onToggleTask={onToggleTask}
          onUpdateTask={onUpdateTask}
          onRemoveTask={onRemoveTask}
          task={task}
        />
      ))}
    </div>
  );
}
