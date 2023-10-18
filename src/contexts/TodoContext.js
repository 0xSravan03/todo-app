import { useContext, createContext } from "react";

const TodoContext = createContext({});

const TodoProvider = TodoContext.Provider;

function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoContext, TodoProvider, useTodoContext };
