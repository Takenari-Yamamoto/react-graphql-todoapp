import { memo, useCallback, useState } from 'react';
import TodoDetail from '../components/TodoDetail';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodoPage = () => {
  const [selectedTodo, setSelected] = useState<number>(0);
  const handleSelect = useCallback((id: number) => setSelected(id), []);

  return (
    <>
      <TodoForm />
      <div className="top-container">
        <TodoList handleSelect={handleSelect} />
        <TodoDetail id={selectedTodo} />
      </div>
    </>
  );
};

export default memo(TodoPage);
