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
