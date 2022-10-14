import { gql, useMutation } from "urql";

const query = gql`
  mutation ($status: Int, $id: ID) {
    update_todos_by_pk(_set: { status: $status }, pk_columns: { id: $id }) {
      title
    }
  }
`;

export const useEditTodo = () => {
  const [state, edit] = useMutation(query);
  const { error, fetching } = state;

  const editTodo = async (status: number, id: string) => {
    await edit({ status, id });
  };

  return {
    editTodo,
    error,
    editing: fetching,
  };
};
