export type TodoResponse<T = {}> = {
  todos: (TodoEntity & T)[];
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
  user: {
    name: string;
  };
  __typename: string;
};

export interface UsersResponse {
  users: UserEntity[];
}
export interface UserEntity {
  id: string;
  created_at: string;
  name: string;
  __typename: string;
}
