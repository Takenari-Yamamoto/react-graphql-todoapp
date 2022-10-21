import { memo, useState } from 'react';
import { useDrag } from 'react-dnd';
import { TodoEntity } from '../../types/type';
import StatusSelect from '../StatusSelect';

type Props = {
  handleSelect: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, status: number) => Promise<void>;
  todo: TodoEntity;
  key: number;
};

type DropResult = {
  colNumber: number;
};

export const DnDItems = {
  Todo: 'Todo',
} as const;

export type DnDItems = typeof DnDItems[keyof typeof DnDItems];

const TodoCard = (props: Props) => {
  const [num, setDroppedColumnNumber] = useState(0);
  const { handleSelect, removeTodo, todo, editTodo } = props;

  const [collected, dragRef] = useDrag(
    () => ({
      type: DnDItems.Todo,
      item: { text: 'text' },
      end: (_, monitor) => {
        console.log(2, monitor);
        const dropResult = monitor.getDropResult() as DropResult;
        console.log('result', dropResult);
        if (dropResult) {
          // ドロップされたカラム番号をstateにセット
          setDroppedColumnNumber(dropResult.colNumber);
        }
      },
      collect: (monitor) => {
        console.log(monitor);
        return { dragging: monitor.isDragging() };
      },
    }),
    []
  );

  return (
    <div
      ref={dragRef}
      className="todo-item"
      onClick={() => handleSelect(todo.id)}
    >
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
