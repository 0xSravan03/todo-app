import { useState, useEffect } from "react";
import { useTodoContext } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todo);
  const { toggleTodo, deleteTodo, updateTodo } = useTodoContext();

  function editTodo() {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    setIsTodoEditable(false);
  }

  return (
    <div className="w-full px-3">
      <div
        className={`w-full flex justify-between rounded-lg mb-4 px-6 py-4 text-black text-md ${
          todo.completed ? `bg-green-300` : `bg-slate-400`
        }`}
        key={todo.id}
      >
        <div className={`flex items-center gap-2 w-full`}>
          <input
            type="checkbox"
            className={`cursor-pointer w-4 h-4 hover:scale-110 duration-200`}
            onChange={() => {
              if (isTodoEditable) return;
              toggleTodo(todo.id);
            }}
            checked={todo.completed}
          />

          {/* Place used for rendering todo text */}
          <input
            type="text"
            spellCheck="false"
            value={todoMessage}
            className={`w-full mr-10 outline-none bg-transparent ${
              todo.completed ? `line-through` : ``
            } ${isTodoEditable ? "shadow" : ""}`}
            readOnly={!isTodoEditable}
            onChange={(e) => setTodoMessage(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <button
            className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 hover:scale-105 duration-100`}
            onClick={() => {
              if (todo.completed) return;

              if (isTodoEditable) {
                editTodo();
              } else {
                setIsTodoEditable(!isTodoEditable);
              }
            }}
            disabled={todo.completed}
          >
            {!isTodoEditable ? "✏️" : "📁"}
          </button>
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 hover:scale-105 duration-100"
            onClick={(e) => deleteTodo(todo.id)}
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
