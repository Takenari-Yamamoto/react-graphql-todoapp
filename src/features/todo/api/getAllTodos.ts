import { useEffect, useState } from 'react';
import { gql, useQuery } from 'urql';
import { useAuth } from '../../../lib/auth';
import { TodoEntity, TodoResponse } from '../types/type';

// (where: {user_id: {_eq: $userId}, status:  { _eq: $status }})
const query = gql`
  query ($userId: String!, $status: Int) {
    todos(where: { user_id: { _eq: $userId }, status: { _eq: $status } }) {
      id
      title
      status
      user {
        name
      }
    }
  }
`;

type User = {
  user: {
    name: String;
  };
};

type Params = {
  userId: string;
  status: number;
};

export const useGetAllTodos = (status: number) => {
  const { user } = useAuth();
  const [todoList, setTodoList] = useState<TodoEntity[]>([]);
  const [result] = useQuery<TodoResponse<User>, Params>({
    query: query,
    variables: { status, userId: user?.sub ?? '' },
  });

  const { data, fetching, error } = result;

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (data?.todos) {
      setTodoList(data?.todos);
    }
  }, [data]);

  return {
    todoList,
    fetching,
    error,
  };
};
