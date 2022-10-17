import { memo } from 'react';
import { formatStatus } from '../../../utils/util';
import { useGetAllTodos } from '../api';
import { useDeleteTodo } from '../api/deleteTodo';
import { useEditTodo } from '../api/editTodo';
import StatusSelect from './StatusSelect';
import TodoCard from './todo-card/TodoCard';

type Props = {
  type: 0 | 1 | 2 | 3;
  handleSelect: (id: number) => void;
};

const TodoList = (props: Props) => {
  // FIX: 取得の処理は親に書きたい
  const { todoList, fetching, error } = useGetAllTodos(props.type);
  const { editTodo } = useEditTodo();
  const { removeTodo } = useDeleteTodo();
  const onEdit = async (id: number, status: number) => {
    if (isNaN(status)) {
      alert('ステータスを設定してください');
      return;
    }
    await editTodo(status, id);
  };

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="todo-container">
      <h1 className="title">{formatStatus(props.type)}</h1>
      {todoList.map((todo, i) => (
        <TodoCard
          handleSelect={props.handleSelect}
          editTodo={onEdit}
          todo={todo}
          removeTodo={removeTodo}
          key={i}
        />
      ))}
    </div>
  );
};

export default memo(TodoList);
