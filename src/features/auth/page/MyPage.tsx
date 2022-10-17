import { memo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Profile } from '../types/type';

const MyPage = () => {
  const { user } = useAuth0<Profile>();

  if (!user) {
    return <div>ユーザー情報が読み込めません</div>;
  }

  console.log(user);

  return (
    <div>
      <h1>MyPage</h1>
      <div>
        <img src={user.picture} alt="profile" />
        <p>Name: {user.name}</p>
      </div>
    </div>
  );
};

export default memo(MyPage);
