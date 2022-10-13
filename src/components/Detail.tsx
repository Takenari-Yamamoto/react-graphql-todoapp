import { memo, useEffect, useState } from 'react';
import { TodoEntity, TodoRepo } from '../queries/useTodo';

const Detail = (props: { id: number }) => {
  const { useShow } = TodoRepo;
  const { data, fetching, error } = useShow(props.id ?? 10);
  const [detail, setDetail] = useState<TodoEntity>();

  useEffect(() => {
    if (data) {
      setDetail(data.todos_by_pk);
    }
  }, [data, detail]);

  if (error) {
    console.error(error);
    <div className="detail-container">Error</div>;
  }
  if (fetching) return <div className="detail-container">Loading</div>;

  return (
    <div className="detail-container">
      <p>
        {detail?.id}: {detail?.title}
      </p>
    </div>
  );
};

export default memo(Detail);
