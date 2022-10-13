import gql from 'graphql-tag';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'urql';

export type TodoResponse = {
  todos: TodoEntity[];
};

export type TodoDetailResponse = {
  todos_by_pk: TodoEntity;
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
      todos(order_by: { created_at: desc }) {
        id
        title
        is_public
        is_completed
        user_id
      }
    }
  `,
  show: gql`
    query ($id: Int!) {
      todos_by_pk(id: $id) {
        created_at
        id
        is_completed
        is_public
        title
        user_id
      }
    }
  `,
  create: gql`
    mutation ($title: String!) {
      insert_todos(objects: [{ title: $title, user_id: "1" }]) {
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
  const [state, createTodo] = useMutation<
    { insert_todos: any },
    { title: string }
  >(query.create);
  const handleAdd = async (title: string) => {
    await createTodo({ title });
    if (state.error) {
      alert('追加に失敗しました');
      throw new Error('追加に失敗しました');
    }
    // FIX: Subscription　実装したら消す
    window.location.reload();
  };

  return { fetching, error, todoList, handleAdd };
};

export const TodoRepo = {
  useShow: (id: number) => {
    const [todoDetail] = useQuery<TodoDetailResponse, { id: number }>({
      query: query.show,
      variables: { id },
    });
    return todoDetail;
  },
};
