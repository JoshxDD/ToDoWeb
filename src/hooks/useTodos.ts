// src/hooks/useTodos.ts
"use client";

import { useEffect, useMemo, useState } from "react";
import type { Todo } from "@/types/todo";
import { loadTodos, saveTodos } from "@/lib/storage";

export type Filter = "all" | "active" | "completed";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    setTodos(loadTodos());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveTodos(todos);
  }, [todos, hydrated]);

  const remaining = useMemo(() => todos.filter(t => !t.done).length, [todos]);

  const add = (text: string) =>
    setTodos(prev => [
      { id: crypto.randomUUID(), text, done: false, createdAt: Date.now() },
      ...prev,
    ]);

  const toggle = (id: string) =>
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));

  const edit = (id: string, text: string) =>
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, text } : t)));

  const remove = (id: string) =>
    setTodos(prev => prev.filter(t => t.id !== id));

  const clearCompleted = () =>
    setTodos(prev => prev.filter(t => !t.done));

  const toggleAll = (done: boolean) =>
    setTodos(prev => prev.map(t => ({ ...t, done })));

  const filtered = useMemo(() => {
    switch (filter) {
      case "active": return todos.filter(t => !t.done);
      case "completed": return todos.filter(t => t.done);
      default: return todos;
    }
  }, [todos, filter]);

  return {
    hydrated,
    todos,
    filtered,
    add,
    toggle,
    edit,
    remove,
    clearCompleted,
    toggleAll,
    remaining,
    filter,
    setFilter,
  };
}
