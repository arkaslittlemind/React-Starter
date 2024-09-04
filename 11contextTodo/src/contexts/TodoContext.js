/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        { 
            id: 1, 
            title: 'Learn React', 
            completed: false 
        },
    ],
    addTodo: (title) => {},
    updateTodo: (id, title) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const useTodoContext = () => {
    return useContext(TodoContext);
}


export const TodoProvider = TodoContext.Provider;