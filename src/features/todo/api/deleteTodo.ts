import { gql, useMutation } from 'urql';

const query = gql`
  mutation ($id: Int!) {
    delete_todos_by_pk(id: $id) {
      id
    }
  }
`;

export const useDeleteTodo = () => {
  const [state, remove] = useMutation(query);

  const removeTodo = async (id: number) => {
    await remove({ id });

    if (state.error) {
      console.error(state.error);
      throw new Error('削除に失敗しました');
    }
  };

  return { removeTodo };
};
