"use client";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import Filters from "@/components/Filters";
import { useTodos } from "@/hooks/useTodos";

export default function Page() {
  const {
    hydrated,
    todos,
    filtered,
    add: addTodo,          // alias to match your prop names
    toggle: toggleTodo,
    remove: deleteTodo,
    clearCompleted,
    toggleAll,
    remaining,
    filter,
    setFilter,
  } = useTodos();

  if (!hydrated) {
    return <p style={{ color: "gray", textAlign: "center", marginTop: 16 }}>Loading…</p>;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "24px auto",
          background: "white",
          borderRadius: 8,
          boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
          padding: 16,
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: 16 }}>Todo List</h1>

        <TodoForm addTodo={addTodo} />

        <div style={{ margin: "12px 0" }}>
          <Filters
            filter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
            remaining={remaining}
            hasCompleted={todos.some((t) => t.done)}
          />
        </div>

        <TodoList
          todos={filtered}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        {/* Optional: Toggle all */}
        {todos.length > 0 && (
          <div style={{ marginTop: 12, textAlign: "right" }}>
            <button
              type="button"
              onClick={() => toggleAll(remaining === todos.length)}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                border: "1px solid #e5e7eb",
                background: "white",
                cursor: "pointer",
              }}
            >
              {remaining === 0 ? "Uncheck all" : "Check all"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
