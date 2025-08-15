"use client";
import { useEffect, useRef, useState } from "react";
import type { Todo } from "@/types/todo";

export default function TodoItem({
  todo, onToggle, onEdit, onDelete,
}: {
  todo: Todo;
  onToggle: () => void;
  onEdit: (text: string) => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (editing) inputRef.current?.focus(); }, [editing]);

  const commit = () => {
    const v = text.trim();
    if (!v) onDelete();
    else if (v !== todo.text) onEdit(v);
    setEditing(false);
  };

  return (
    <li className="flex items-center gap-3 rounded-lg border bg-white px-3 py-2">
      <input type="checkbox" checked={todo.done} onChange={onToggle} className="size-5 accent-black" />
      {editing ? (
        <input
          ref={inputRef}
          value={text}
          onChange={e => setText(e.target.value)}
          onBlur={commit}
          onKeyDown={e => { if (e.key === "Enter") commit(); if (e.key === "Escape") { setText(todo.text); setEditing(false); } }}
          className="flex-1 rounded border px-2 py-1"
        />
      ) : (
        <button
          onDoubleClick={() => setEditing(true)}
          onClick={onToggle}
          className={`flex-1 text-left ${todo.done ? "text-gray-400 line-through" : ""}`}
        >
          {todo.text}
        </button>
      )}
      {!editing && (
        <>
          <button onClick={() => setEditing(true)} className="rounded border px-2 py-1 text-sm">Edit</button>
          <button onClick={onDelete} className="rounded border px-2 py-1 text-sm">Delete</button>
        </>
      )}
    </li>
  );
}
