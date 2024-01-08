import { useState } from "react";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <h1 className="text-3xl font-bold underline">Hello Eric!</h1>
    </TodoProvider>
  );
}

export default App;
