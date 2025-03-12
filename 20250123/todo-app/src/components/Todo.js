'use client';

import { useContext } from 'react';
import { ToDoActions } from '@/util/constants';
import { TodoContext } from '@/context/TodoContext';

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const handleDelete = () => {
    dispatch({ type: ToDoActions.DELETE_TODO, payload: todo.id });
  };

  const handleToggle = () => {
    dispatch({ type: ToDoActions.TOGGLE_TODO, payload: todo.id });
  };

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={handleToggle} className="complete">
        {todo.isComplete ? ' Undo' : 'Complete'}
      </button>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
      <style jsx>{`
        li {
          display: flex;
          gap: 10px;
          border: 1px black solid;
          padding: 10px;
        }

        span {
          flex-grow: 3;
        }

        .delete-button {
          background-color: red;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 0.5rem;
        }
      `}</style>
    </li>
  );
};

export default Todo;
