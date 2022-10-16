import { gql, useQuery } from 'urql';
import { UsersResponse } from '../types/types';

const query = gql`
  query {
    users {
      id
      created_at
      name
    }
  }
`;

export const useGetAllUsers = () => {
  const [result] = useQuery<UsersResponse>({
    query: query,
  });
  return result;
};
