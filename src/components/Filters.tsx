"use client";

export type Filter = "all" | "active" | "completed";

export default function Filters({
  filter,
  setFilter,
  clearCompleted,
  remaining,
  hasCompleted,
}: {
  filter: Filter;
  setFilter: (f: Filter) => void;
  clearCompleted: () => void;
  remaining: number;
  hasCompleted: boolean;
}) {
  const Btn = ({ f, label }: { f: Filter; label: string }) => (
    <button
      type="button"
      onClick={() => setFilter(f)}
      style={{
        padding: "6px 10px",
        borderRadius: 6,
        border: "1px solid " + (filter === f ? "#9ca3af" : "#e5e7eb"),
        background: filter === f ? "#f3f4f6" : "white",
        cursor: "pointer",
        marginRight: 8,
        marginBottom: 8,
      }}
      aria-pressed={filter === f}
    >
      {label}
    </button>
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      <div>
        <Btn f="all" label="All" />
        <Btn f="active" label="Active" />
        <Btn f="completed" label="Completed" />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 13, color: "#6b7280" }}>
          {remaining} {remaining === 1 ? "item" : "items"} left
        </span>
        <button
          type="button"
          onClick={clearCompleted}
          disabled={!hasCompleted}
          style={{
            padding: "6px 10px",
            borderRadius: 6,
            border: "1px solid #e5e7eb",
            background: "white",
            cursor: hasCompleted ? "pointer" : "not-allowed",
            opacity: hasCompleted ? 1 : 0.5,
          }}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}
