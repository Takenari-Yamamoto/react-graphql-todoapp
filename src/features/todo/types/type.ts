import { Status } from "../../../config/enum";

export type TodoResponse<T = {}> = {
  todos: (TodoEntity & T)[];
};

export type TodoDetailResponse = {
  todos_by_pk: TodoEntity;
};

export type TodoEntity = {
  id: number;
  status: Status;
  title: string;
  user_id: string;
  user: {
    name: string;
  };
  __typename: string;
};
