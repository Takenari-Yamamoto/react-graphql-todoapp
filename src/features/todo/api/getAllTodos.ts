import { useEffect, useState } from 'react';
import { gql, useQuery } from 'urql';
import { TodoEntity, TodoResponse } from '../types/type';

const query = gql`
  query ($status: Int) {
    todos(where: { status: { _eq: $status } }) {
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

export const useGetAllTodos = (status: number) => {
  const [todoList, setTodoList] = useState<TodoEntity[]>([]);
  const [result] = useQuery<TodoResponse<User>>({
    query: query,
    variables: { status },
  });

  const { data, fetching, error } = result;

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (data?.todos) {
      setTodoList(data?.todos);
      console.log(data?.todos);
    }
  }, [data]);

  return {
    todoList,
    fetching,
    error,
  };
};
