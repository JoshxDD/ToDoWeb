"use client";
import { useState } from "react";

export default function TodoForm({
  onAdd, onToggleAll, hasTodos, allDone,
}: {
  onAdd: (text: string) => void;
  onToggleAll: () => void;
  hasTodos: boolean;
  allDone: boolean;
}) {
  const [text, setText] = useState("");
  const submit = () => {
    const v = text.trim();
    if (!v) return;
    onAdd(v);
    setText("");
  };
  return (
    <div className="flex gap-2">
      {hasTodos && (
        <button onClick={onToggleAll} className="rounded border px-3 py-2 text-sm">
          {allDone ? "Uncheck all" : "Check all"}
        </button>
      )}
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === "Enter" && submit()}
        placeholder="Add a task and press Enter"
        className="flex-1 rounded border px-3 py-2"
      />
      <button onClick={submit} className="rounded bg-black px-3 py-2 text-sm text-white">
        Add
      </button>
    </div>
  );
}
