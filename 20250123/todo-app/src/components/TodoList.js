'use client';

import { useContext, useState } from 'react';
import { TodoContext } from '@/context/TodoContext';
import { ToDoActions } from '@/util/constants';
import Todo from '@/components/Todo';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  console.log(setNewTodo);

  const { todoLists, dispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: ToDoActions.ADD_TODO, payload: newTodo });
      setNewTodo('');
    }
  };

  return (
    <div className={'container'}>
      <h1>Todo List</h1>
      <input
        type={'text'}
        placeholder={'Add new todo'}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todoLists.map((todo) => (
          <Todo key={todo.id} todo={todo}></Todo>
        ))}
      </ul>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid black;
          border-radius: 5px;
        }

        input {
          padding: 1rem;
          margin-bottom: 10px;
          border: 1px solid black;
          border-radius: 5px;
        }

        button {
          width: 20%;
          padding: 20px;
        }

        ul {
          list-style-type: none;
          display: flex;
          padding: 0px;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

export default TodoList;
