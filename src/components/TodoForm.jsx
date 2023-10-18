import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodoContext();

  function handleSubmit(e) {
    e.preventDefault();

    // Prevent submitting empty todo
    if (todo == '') return;

    // calling context function to update the todo (todo need to be an object)
    addTodo({todo, completed: false});
    setTodo(''); // making input filed empty after adding todo
  }

  return (
    <form className="w-full flex gap-4 px-3">
        <input 
            type="text"
            value={todo} 
            placeholder="Write todo here..." 
            spellCheck="false"
            className="w-full p-2 rounded-lg outline-none text-lg bg-white/20"
            onChange={(e) => setTodo(e.target.value)}  
        />
        <button 
            className="px-4 py-1 text-lg rounded-lg outline-none bg-white/20 hover:scale-105 duration-150"
            onClick={handleSubmit}
        >Add</button>
    </form>
  );
}

export default TodoForm;