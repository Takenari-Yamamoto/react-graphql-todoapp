import { useAuth0 } from '@auth0/auth0-react';
import React, { memo } from 'react';
import style from './header.module.css';

export type PageType = 'Top' | 'User';

const Header = (props: { handleSelect: (page: PageType) => void }) => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <header className={style.header}>
      <p className={style.item} onClick={() => props.handleSelect('Top')}>
        Todo List
      </p>
      <p className={style.item} onClick={() => props.handleSelect('User')}>
        User List
      </p>
      {isAuthenticated && (
        <p className={style.item} onClick={() => logout()}>
          Logout
        </p>
      )}
    </header>
  );
};

export default memo(Header);
