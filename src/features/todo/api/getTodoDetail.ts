import gql from 'graphql-tag';
import { useQuery } from 'urql';
import { TodoDetailResponse } from '../types/type';

const query = gql`
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
`;

export const useGetTodoDetail = (id: number) => {
  const [res] = useQuery<TodoDetailResponse, { id: number }>({
    query: query,
    variables: { id },
  });

  return res;
};
