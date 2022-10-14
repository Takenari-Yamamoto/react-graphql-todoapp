export interface UsersResponse {
  users: UserEntity[];
}
export interface UserEntity {
  id: string;
  created_at: string;
  name: string;
  __typename: string;
}
