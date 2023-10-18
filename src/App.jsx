import { useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  /* addTodo function adds new todo to todos state variable
    This function is actually used inside the todo form.
  */
  function addTodo(todo) {
    setTodos((prev) => [...prev, {id: Date.now(), ...todo}])
  }

  /* This function is used to update the todo text */
  function updateTodo(id, newTodo) {
    setTodos(prev => prev.map(todo => todo.id == id ? newTodo : todo))
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter((todo) => todo.id != id))
  }

  function toggleTodo(id) {
    setTodos((prev) => prev.map(todo => todo.id == id ? {...todo, completed : true} : todo))
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <main className="w-full min-h-screen bg-slate-500 py-8">
        <section className="w-full max-w-2xl mx-auto border p-4 text-white">
          <h1 className="text-2xl font-bold text-center mt-2 mb-6">Manage Your Todos</h1>
          <section>

          </section>
        </section>
      </main>
    </TodoProvider>
  );
}

export default App;