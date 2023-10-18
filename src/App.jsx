import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import { TodoForm, TodoItem } from "./components/index";

function App() {
  const [todos, setTodos] = useState([]);

  /* addTodo function adds new todo to todos state variable
    This function is actually used inside the todo form.
  */
  function addTodo(todo) {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  /* This function is used to update the todo text */
  function updateTodo(id, newTodo) {
    setTodos(prev => prev.map(todo => todo.id == id ? newTodo : todo))
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter((todo) => todo.id != id))
  }

  function toggleTodo(id) {
    setTodos((prev) => prev.map(todo => todo.id == id ? { ...todo, completed : !todo.completed } : todo))
  }

  /** This will run only once when we load the application */
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todos'));

    if (data && data.length > 0) {
      setTodos(data)
    }
  }, []);

  /** This will run when we add new todo items and 
      store the updated todos in the local storage */
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <main className="w-full min-h-screen py-8 bg-[#172842]">
        <section className="w-full max-w-2xl mx-auto border p-4 text-white">
          <h1 className="text-2xl font-bold text-center mt-2 mb-6">Manage Your Todos</h1>
          <section>
            <TodoForm />
          </section>
        </section>
      </main>
    </TodoProvider>
  );
}

export default App;