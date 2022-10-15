import { memo, useState } from 'react';
import { useCreateTodo } from '../api';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const { createTodo } = useCreateTodo(title);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={() => createTodo()}>追加</button>
    </div>
  );
};

export default memo(TodoForm);
