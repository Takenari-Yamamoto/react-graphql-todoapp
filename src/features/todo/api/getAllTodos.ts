import { useEffect, useState } from 'react';
import { gql, useQuery } from 'urql';
import { TodoEntity, TodoResponse } from '../types/type';

const query = gql`
  query {
    todos(order_by: { created_at: desc }) {
      id
      title
      is_public
      is_completed
      user_id
    }
  }
`;

export const useGetAllTodos = () => {
  const [todoList, setTodoList] = useState<TodoEntity[]>([]);
  const [result] = useQuery<TodoResponse>({
    query: query,
  });

  const { data, fetching, error } = result;

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
