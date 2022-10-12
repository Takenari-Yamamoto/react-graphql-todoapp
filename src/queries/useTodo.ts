import gql from 'graphql-tag';
import { useEffect, useState } from 'react';
import { useQuery } from 'urql';

export type TodoResponse = {
  todos: TodoEntity[];
};

export type TodoEntity = {
  id: number;
  is_completed: boolean;
  is_public: boolean;
  title: string;
  user_id: string;
  __typename: string;
};

const Query = gql`
  query {
    todos {
      id
      title
      is_public
      is_completed
      user_id
    }
  }
`;

export const useTodo = () => {
  const [todoList, setTodoList] = useState<TodoEntity[]>([]);
  const [result] = useQuery<TodoResponse>({
    query: Query,
  });
  const { data, fetching, error } = result;

  useEffect(() => {
    if (data?.todos) {
      setTodoList(data?.todos);
    }
  }, [data]);

  return { fetching, error, todoList };
};
