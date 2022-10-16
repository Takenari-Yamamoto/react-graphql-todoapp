import { memo, useEffect, useState } from 'react';
import { useGetTodoDetail } from '../../api';
import { TodoEntity } from '../../types/type';
import style from './todoDetail.module.css';

type Props = {
  id: number;
  handleClose: () => void;
};

const TodoDetail = (props: Props) => {
  // FIX: 取得の処理は親に書きたい
  const { data, fetching, error } = useGetTodoDetail(props.id ?? 10);
  const [detail, setDetail] = useState<TodoEntity>();

  useEffect(() => {
    if (data) {
      setDetail(data.todos_by_pk);
    }
  }, [data, detail]);

  return (
    <div className={style.todoDetailWrapper}>
      <div className={style.todoDetail}>
        <p>
          {fetching && <p>Fetching</p>}
          {error && <p>Error</p>}
          {detail?.id}: {detail?.title}
        </p>
        <button onClick={() => props.handleClose()}>閉じる</button>
      </div>
    </div>
  );
};

export default memo(TodoDetail);
