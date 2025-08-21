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
    <li className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={onToggle}
        className="size-5 accent-gray-800"
        aria-label={`Mark ${todo.text} as ${todo.done ? "active" : "completed"}`}
      />

      {editing ? (
        <input
          ref={inputRef}
          value={text}
          onChange={e => setText(e.target.value)}
          onBlur={commit}
          onKeyDown={e => {
            if (e.key === "Enter") commit();
            if (e.key === "Escape") { setText(todo.text); setEditing(false); }
          }}
          className="flex-1 rounded-md border border-gray-300 px-2 py-1 text-sm"
        />
      ) : (
        <button
          onDoubleClick={() => setEditing(true)}
          onClick={onToggle}
          className={`flex-1 text-left text-sm ${todo.done ? "text-gray-400 line-through" : "text-gray-800"}`}
        >
          {todo.text}
        </button>
      )}

      {!editing && (
        <div className="flex gap-2">
          <button
            onClick={() => setEditing(true)}
            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}
