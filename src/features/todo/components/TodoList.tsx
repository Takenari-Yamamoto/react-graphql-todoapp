import { memo, useState } from "react";
import { formatStatus } from "../../../utils/util";
import { useCreateTodo, useGetAllTodos } from "../api";
import StatusSelect from "./StatusSelect";

const Todo = (props: { handleSelect: (id: number) => void }) => {
  const { todoList, fetching, error } = useGetAllTodos();
  const [title, setTitle] = useState("");
  const { createTodo } = useCreateTodo(title);

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div className='todo-container'>
      <input
        type='text'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={() => createTodo()}>追加</button>
      {todoList.map((todo, i) => (
        <div
          className='todo-item'
          onClick={() => props.handleSelect(todo.id)}
          key={i}>
          <p>User Name:{todo.user.name}</p>
          <p>Id: {todo.id}</p>
          <p>Title: {todo.title}</p>
          Status: <StatusSelect selected={formatStatus(todo.status)} />
        </div>
      ))}
    </div>
  );
};

export default memo(Todo);
