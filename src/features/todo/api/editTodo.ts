import { gql, useMutation } from "urql";

const query = gql`
  mutation ($status: Int, $id: Int!) {
    update_todos_by_pk(_set: { status: $status }, pk_columns: { id: $id }) {
      id
    }
  }
`;

export const useEditTodo = () => {
  const [state, edit] = useMutation(query);
  const { error, fetching } = state;

  const editTodo = async (status: number, id: number) => {
    await edit({ status, id });

    if (error) {
      throw new Error("エラーだよーん");
    }
  };

  return {
    editTodo,
    error,
    editing: fetching,
  };
};
