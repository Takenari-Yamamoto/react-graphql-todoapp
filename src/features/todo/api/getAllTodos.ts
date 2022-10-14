import { useEffect, useState } from "react";
import { gql, useQuery } from "urql";
import { TodoEntity, TodoResponse, UserEntity } from "../types/type";

const query = gql`
  query {
    todos(order_by: { created_at: desc }) {
      id
      title
      is_public
      is_completed
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

export const useGetAllTodos = () => {
  const [todoList, setTodoList] = useState<TodoEntity[]>([]);
  const [result] = useQuery<TodoResponse<User>>({
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
