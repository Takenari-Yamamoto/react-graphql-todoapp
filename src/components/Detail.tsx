import { memo, useEffect, useState } from 'react';
import { TodoEntity, TodoRepo } from '../queries/useTodo';

const Detail = () => {
  const { useShow } = TodoRepo;
  const { data, fetching, error } = useShow(10);
  const [detail, setDetail] = useState<TodoEntity>();

  useEffect(() => {
    if (data) {
      setDetail(data.todos_by_pk);
    }
  }, [data, detail]);

  if (error) {
    console.error(error);
    <div>Error</div>;
  }
  if (fetching) return <div>Loading</div>;

  return (
    <div className="detail-container">
      <p>
        {detail?.id}: {detail?.title}
      </p>
    </div>
  );
};

export default memo(Detail);
