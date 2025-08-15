"use client";

import { useTodos } from "@/hooks/useTodos";   // named import ✅
import TodoForm from "@/components/TodoForm";  // default import ✅
import TodoList from "@/components/TodoList";  // default import ✅
import Filters from "@/components/Filters";    // default import ✅

export default function Page() {
  const {
    hydrated, filtered, add, toggle, edit, remove,
    clearCompleted, toggleAll, remaining, todos, filter, setFilter,
  } = useTodos();

  if (!hydrated) return <p className="text-sm text-gray-500">Loading…</p>;

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">✅ Todo</h1>
      <TodoForm
        onAdd={add}
        onToggleAll={() => toggleAll(remaining === todos.length)}
        hasTodos={todos.length > 0}
        allDone={remaining === 0 && todos.length > 0}
      />
      <Filters
        value={filter}
        onChange={setFilter}
        remaining={remaining}
        onClearCompleted={clearCompleted}
        hasCompleted={todos.some(t => t.done)}
      />
      <TodoList
        todos={filtered}
        onToggle={toggle}
        onEdit={edit}
        onDelete={remove}
      />
    </main>
  );
}
