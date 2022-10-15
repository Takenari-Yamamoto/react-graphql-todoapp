import { memo, useCallback, useState } from 'react';
import TodoDetail from '../components/todo-detail/TodoDetail';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodoPage = () => {
  const [selectedTodo, setSelected] = useState<number | null>(null);
  const handleSelect = useCallback((id: number) => setSelected(id), []);

  return (
    <>
      <TodoForm />
      <div className="top-container">
        <TodoList handleSelect={handleSelect} type={0} />
        <TodoList handleSelect={handleSelect} type={1} />
        <TodoList handleSelect={handleSelect} type={2} />
        <TodoList handleSelect={handleSelect} type={3} />
        {selectedTodo && (
          <TodoDetail id={selectedTodo} handleClose={() => setSelected(null)} />
        )}
      </div>
    </>
  );
};

export default memo(TodoPage);
