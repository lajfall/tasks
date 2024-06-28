import { cn } from "../lib/utils";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Task } from "../lib/types";

export default function TaskItem({
  task,
  onToggleTask,
  onUpdateTask,
  onRemoveTask,
}: {
  task: Task;
  onUpdateTask: (id: string, content: string) => void;
  onRemoveTask: (id: string) => void;
  onToggleTask: (id: string) => void;
}) {
  return (
    <div className="group relative flex items-center gap-x-2 py-2">
      <span className="grid size-10 shrink-0 place-items-center">
        <Checkbox
          className="size-6 rounded-full"
          checked={task.done}
          onClick={() => onToggleTask(task.id)}
        />
      </span>
      <Input
        className={cn(
          "focus-visible:ring-0",
          task.done && "line-through opacity-50",
        )}
        value={task.content}
        onChange={(e) => onUpdateTask(task.id, e.target.value)}
      />
      <img
        onClick={() => onRemoveTask(task.id)}
        className="absolute right-2 group-hover:block sm:hidden"
        src="/delete.svg"
        alt=""
      />
    </div>
  );
}
