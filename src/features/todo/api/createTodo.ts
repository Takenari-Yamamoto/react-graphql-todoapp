import { gql, useMutation, useQuery } from 'urql';

const query = gql`
  mutation ($title: String!) {
    insert_todos(objects: [{ title: $title, user_id: "1" }]) {
      affected_rows
    }
  }
`;

export const useCreateTodo = (title: string) => {
  const [state, create] = useMutation<{ insert_todos: any }, { title: string }>(
    query
  );
  const { error, fetching } = state;

  const createTodo = async () => {
    if (!title) {
      alert('入力してね');
      return;
    }

    await create({ title });
    if (state.error) {
      alert('追加に失敗しました');
      throw new Error('追加に失敗しました');
    }
    // FIX: Subscription　実装したら消す
    window.location.reload();
  };

  return {
    createTodo,
    error,
    fetching,
  };
};
