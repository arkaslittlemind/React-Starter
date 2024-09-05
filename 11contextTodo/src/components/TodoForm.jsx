import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
    
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({
      todo,
      completed: false,
    });
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto sm:max-w-lg lg:max-w-2xl p-2 sm:p-4">
      <input
        type="text"
        placeholder="Write Todo..."
        className="flex-1 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-2 sm:py-3"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-2 sm:py-3 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
