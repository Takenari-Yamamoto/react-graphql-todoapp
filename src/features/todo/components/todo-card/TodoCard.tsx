import { memo } from 'react';
import { TodoEntity } from '../../types/type';
import StatusSelect from '../StatusSelect';

type Props = {
  handleSelect: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, status: number) => Promise<void>;
  todo: TodoEntity;
  key: number;
};

const TodoCard = (props: Props) => {
  const { handleSelect, removeTodo, todo, editTodo } = props;

  return (
    <div className="todo-item" onClick={() => handleSelect(todo.id)}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          if (window.confirm('本当に削除しますか')) {
            removeTodo(todo.id);
          }
        }}
        className="delete-icon"
        src="https://free-icons.net/wp-content/uploads/2021/03/symbol079.png"
        alt="delete"
      />
      <p>User Name:{todo.user.name}</p>
      <p>Id: {todo.id}</p>
      <p>Title: {todo.title}</p>
      Status:
      <StatusSelect onSelect={editTodo} id={todo.id} selected={todo.status} />
    </div>
  );
};

export default memo(TodoCard);
