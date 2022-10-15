import { memo, useCallback, useState } from 'react';
import { STATUS } from '../../../config/enum';
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
        <TodoList handleSelect={handleSelect} type={0} />
        <TodoList handleSelect={handleSelect} type={1} />
        <TodoList handleSelect={handleSelect} type={2} />
        <TodoList handleSelect={handleSelect} type={3} />
        {/* <TodoDetail id={selectedTodo} /> */}
      </div>
    </>
  );
};

export default memo(TodoPage);
