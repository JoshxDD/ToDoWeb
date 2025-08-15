"use client";

import type { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos, onToggle, onEdit, onDelete,
}: {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onEdit={text => onEdit(todo.id, text)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}
