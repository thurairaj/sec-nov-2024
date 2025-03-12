'use client';

import { createContext, useReducer } from 'react';
import { ToDoActions } from '@/util/constants';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const todoReducer = (todoLists, action) => {
    if (action.type === ToDoActions.ADD_TODO) {
      return [
        ...todoLists,
        { id: Date.now(), text: action.payload, isComplete: false },
      ];
    } else if (action.type === ToDoActions.TOGGLE_TODO) {
      return todoLists.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo,
      );
    } else if (action.type === ToDoActions.DELETE_TODO) {
      console.log(action);
      console.log(todoLists.filter((todo) => todo.id !== action.payload));
      return todoLists.filter((todo) => todo.id !== action.payload);
    }
  };

  const [todoLists, dispatch] = useReducer(todoReducer, [], () => []);

  return (
    <TodoContext.Provider value={{ todoLists, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
