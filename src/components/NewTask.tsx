import { FormEvent, MouseEvent, useState } from "react";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";

export default function NewTask({
  onAddTask,
}: {
  onAddTask: (content: string) => void;
}) {
  const [content, setContent] = useState("");
  type NewTaskEvent = FormEvent<HTMLFormElement> | MouseEvent<HTMLSpanElement>;

  function handleSubmit(e: NewTaskEvent) {
    e.preventDefault();
    if (content.trim()) {
      onAddTask(content);
      setContent("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-x-2">
      <span
        onClick={handleSubmit}
        className="grid size-10 shrink-0 place-items-center"
      >
        <Plus />
      </span>
      <Input
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="New Task"
      />
    </form>
  );
}
