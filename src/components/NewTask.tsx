import { useState } from "react";
import { Input } from "./ui/input";

export default function NewTask({
  onAddTask,
}: {
  onAddTask: (content: string) => void;
}) {
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAddTask(content);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-x-2">
      <span className="grid size-10 shrink-0 place-items-center">
        <img className="size-8" src="/add.svg" alt="" />
      </span>
      <Input
        className="focus-visible:ring-0"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="New Task"
      />
    </form>
  );
}
