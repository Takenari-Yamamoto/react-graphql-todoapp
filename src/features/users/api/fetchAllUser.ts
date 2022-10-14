import { useState } from "react";
import { gql, Query, useQuery } from "urql";
import { UsersResponse } from "../../todo/types/type";

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
