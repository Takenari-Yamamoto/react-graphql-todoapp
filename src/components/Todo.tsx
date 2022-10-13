import React, { memo, useState } from 'react';
import { useCreateTodo, useGetAllTodos } from '../features/todo/api';

const Todo = (props: { handleSelect: (id: number) => void }) => {
  const { todoList, fetching, error } = useGetAllTodos();
  const [title, setTitle] = useState('');
  const { createTodo } = useCreateTodo(title);

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="todo-container">
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={() => createTodo()}>追加</button>
      {todoList.map((todo, i) => (
        <div
          className="todo-item"
          onClick={() => props.handleSelect(todo.id)}
          key={i}
        >
          <p>id: {todo.id}</p>
          <p>title: {todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(Todo);
