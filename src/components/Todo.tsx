import React, { memo } from 'react';
import { useTodo } from '../queries/useTodo';

const Todo = () => {
  const { fetching, error, todoList } = useTodo();

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="app">
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
