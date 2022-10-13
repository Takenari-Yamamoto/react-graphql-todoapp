import React, { memo, useState } from 'react';
import { useTodo } from '../queries/useTodo';

const Todo = () => {
  const { fetching, error, todoList, handleAdd } = useTodo();
  const [title, setTitle] = useState('');

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="app">
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={() => handleAdd(title)}>追加</button>
      {todoList.map((todo, i) => (
        <div className="todo-item" key={i}>
          <p>id: {todo.id}</p>
          <p>title: {todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(Todo);
