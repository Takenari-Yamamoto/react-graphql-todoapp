import { gql, useMutation } from 'urql';
import { useAuth } from '../../../lib/auth';

const query = gql`
  mutation ($title: String!, $userId: String!) {
    insert_todos(objects: [{ title: $title, user_id: $userId }]) {
      affected_rows
    }
  }
`;

type Params = {
  title: string;
  userId: string;
};

export const useCreateTodo = (title: string) => {
  const { user } = useAuth();

  const [state, create] = useMutation<{ insert_todos: any }, Params>(query);
  const { error, fetching } = state;

  const createTodo = async () => {
    if (!title) {
      alert('入力してね');
      return;
    }

    await create({ title, userId: user?.sub ?? '' });
    if (state.error) {
      alert('追加に失敗しました');
      throw new Error('追加に失敗しました');
    }
    // FIX: Subscription　実装したら消す
    window.location.reload();
  };

  return {
    createTodo,
    error,
    fetching,
  };
};
