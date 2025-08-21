"use client";

import { useState } from "react";

export default function TodoForm({
  addTodo,
}: {
  addTodo: (text: string) => void;
}) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = text.trim();
    if (!v) return;
    addTodo(v);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: 8, marginBottom: 12 }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task…"
        style={{
          flex: 1,
          padding: "8px",
          border: "1px solid #d1d5db",
          borderRadius: 6,
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 14px",
          background: "#374151",
          color: "white",
          border: "1px solid #374151",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
}
