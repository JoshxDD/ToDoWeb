"use client";

export interface Todo {
  id: string;
  text: string;
  done?: boolean;          // your hook uses 'done'
  completed?: boolean;     // tolerate 'completed' if present
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) {
  if (!todos || todos.length === 0) {
    return (
      <p style={{ color: "#6b7280", textAlign: "center", marginTop: 12 }}>
        No todos yet. Add one above 👆
      </p>
    );
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {todos.map((t) => {
        const isDone = typeof t.done === "boolean" ? t.done : !!t.completed;
        return (
          <li
            key={t.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: 8,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              background: "#f9fafb",
            }}
          >
            <button
              type="button"
              onClick={() => toggleTodo(t.id)}
              style={{
                flex: 1,
                textAlign: "left",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textDecoration: isDone ? "line-through" : "none",
                color: isDone ? "#9ca3af" : "#111827",
                paddingRight: 8,
              }}
              aria-label={isDone ? "Mark active" : "Mark completed"}
            >
              {t.text}
            </button>

            <button
              type="button"
              onClick={() => deleteTodo(t.id)}
              aria-label="Delete"
              title="Delete"
              style={{
                border: "1px solid #e5e7eb",
                background: "white",
                padding: "6px 10px",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
