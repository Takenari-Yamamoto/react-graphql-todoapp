import { useAuth0 } from '@auth0/auth0-react';
import { memo } from 'react';
import { Profile } from '../../features/auth/types/type';
import style from './header.module.css';

export type PageType = 'Top' | 'User' | 'MyPage';

const Header = (props: { handleSelect: (page: PageType) => void }) => {
  const { isAuthenticated, logout, user } = useAuth0<Profile>();
  return (
    <header className={style.header}>
      <p className={style.item} onClick={() => props.handleSelect('Top')}>
        Todo List
      </p>
      <p className={style.item} onClick={() => props.handleSelect('User')}>
        User List
      </p>
      <p className={style.item} onClick={() => props.handleSelect('MyPage')}>
        MyPage
      </p>
      {isAuthenticated && (
        <div className={style.right}>
          <img className={style.image} src={user?.picture} alt="profile" />
          <p>ようこそ {user?.name} さん</p>
          <button className={style.button} onClick={() => logout()}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default memo(Header);
