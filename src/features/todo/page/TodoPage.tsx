import { memo, useCallback, useState } from "react";
import { useEditTodo } from "../api/editTodo";
import Detail from "../components/TodoDetail";
import List from "../components/TodoList";

const TodoPage = () => {
  const [selectedTodo, setSelected] = useState<number>(0);
  const handleSelect = useCallback((id: number) => setSelected(id), []);

  // const { editTodo } = useEditTodo();
  // editTodo(3, "21");
  return (
    <div className='top-container'>
      <List handleSelect={handleSelect} />
      <Detail id={selectedTodo} />
    </div>
  );
};

export default memo(TodoPage);
