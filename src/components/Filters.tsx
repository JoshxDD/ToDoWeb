"use client";
import type { Filter } from "@/hooks/useTodos";

export default function Filters({
  value, onChange, remaining, onClearCompleted, hasCompleted,
}: {
  value: Filter;
  onChange: (f: Filter) => void;
  remaining: number;
  onClearCompleted: () => void;
  hasCompleted: boolean;
}) {
  const btn = (f: Filter, label: string) => (
    <button
      key={f}
      onClick={() => onChange(f)}
      className={`rounded-lg border px-3 py-2 text-sm ${value === f ? "bg-black text-white" : ""}`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex gap-2">
        {btn("all", "All")}
        {btn("active", "Active")}
        {btn("completed", "Completed")}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">
          {remaining} {remaining === 1 ? "item" : "items"} left
        </span>
        <button
          onClick={onClearCompleted}
          disabled={!hasCompleted}
          className="rounded-lg border px-3 py-2 text-sm disabled:opacity-40"
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}
