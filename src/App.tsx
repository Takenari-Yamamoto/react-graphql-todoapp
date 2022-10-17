import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useState } from 'react';
import './App.css';
import Header, { PageType } from './components/header/Header';
import MyPage from './features/auth/page/MyPage';
import { Profile } from './features/auth/types/type';
import TodoPage from './features/todo/page/TodoPage';
import UserPage from './features/users/page/UserPage';

function App() {
  const { isAuthenticated, loginWithPopup, isLoading, error } =
    useAuth0<Profile>();

  const [page, setPage] = useState<PageType>('Top');
  const handleSetPage = useCallback((page: PageType) => {
    setPage(page);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
      <Header handleSelect={handleSetPage} />
      {isAuthenticated ? (
        <div className="app-container">
          {page === 'Top' && <TodoPage />}
          {page === 'User' && <UserPage />}
          {page === 'MyPage' && <MyPage />}
        </div>
      ) : (
        <button
          onClick={() => {
            loginWithPopup().catch((e) => {
              console.error(e);
              alert('認証に失敗しました。');
            });
          }}
        >
          認証して Todo アプリを使う
        </button>
      )}
    </>
  );
}

export default App;
