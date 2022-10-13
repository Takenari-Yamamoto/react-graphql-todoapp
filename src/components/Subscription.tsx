import { memo } from 'react';
import { useTodoSubscription } from '../queries/useTodoSubscription';

export const Subscription = () => {
  const { res } = useTodoSubscription();

  if (res.fetching) return <p>Loading...</p>;
  if (res.error) {
    console.error('Subscription Error --->>>', res.error);
    return <p>Oh no... {res.error.message}</p>;
  }
  return <div>aaa</div>;
};

export default memo(Subscription);
