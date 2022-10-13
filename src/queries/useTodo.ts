import gql from 'graphql-tag';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'urql';

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

const query = {
  index: gql`
    query {
      todos {
        id
        title
        is_public
        is_completed
        user_id
      }
    }
  `,
  create: gql`
    mutation {
      insert_todos(objects: [{ title: "My First Todo", user_id: "1" }]) {
        affected_rows
      }
    }
  `,
};

export const useTodo = () => {
  // Index
  const [todoList, setTodoList] = useState<TodoEntity[]>([]);
  const [result] = useQuery<TodoResponse>({
    query: query.index,
  });
  const { data, fetching, error } = result;

  useEffect(() => {
    if (data?.todos) {
      setTodoList(data?.todos);
    }
  }, [data]);

  // Create
  const [state, createTodo] = useMutation(query.create);
  const handleAdd = async () => {
    const res = await createTodo();
    console.log(111, res);
    console.log(222, state);
  };

  return { fetching, error, todoList, handleAdd };
};
