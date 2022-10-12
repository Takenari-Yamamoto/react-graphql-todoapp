import gql from 'graphql-tag';
import { useEffect } from 'react';
import { useSubscription } from 'urql';
import { TodoEntity } from './useTodo';

const Query = gql`
  subscription {
    todos {
      id
      is_completed
      is_public
      title
      user_id
    }
  }
`;
const handleSubscription = (todos: TodoEntity[] = [], todo: TodoEntity) => [
  ...todos,
  todo,
];

export const useTodoSubscription = () => {
  const [res] = useSubscription<TodoEntity, TodoEntity[]>(
    { query: Query },
    handleSubscription
  );

  useEffect(() => {
    console.log(res);
  }, [res]);

  return { res };
};
