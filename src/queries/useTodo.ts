import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { useQuery } from "urql";

type Response = {
  todos: Todo[];
};

type Todo = {
  id: number;
  is_completed: boolean;
  is_public: boolean;
  title: string;
  user_id: string;
  __typename: string;
};

export const Query = gql`
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
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [result] = useQuery<Response>({
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
