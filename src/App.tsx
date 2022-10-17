import { useAuth0, withAuth0 } from '@auth0/auth0-react';
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header, { PageType } from './components/header/Header';
import AuthPage from './features/auth/page/AuthPage';
import TodoPage from './features/todo/page/TodoPage';
import UserPage from './features/users/page/UserPage';

function App() {
  const {
    isAuthenticated,
    loginWithPopup,
    isLoading,
    error,
    user,
    getAccessTokenWithPopup,
  } = useAuth0();

  const [page, setPage] = useState<PageType>('Top');
  const handleSetPage = useCallback(
    (page: PageType) => {
      setPage(page);
    },
    [page]
  );

  useEffect(() => {
    console.log(333, isAuthenticated, user);
  }, [isAuthenticated, user]);

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
        </div>
      ) : (
        <button
          onClick={() => {
            getAccessTokenWithPopup()
              .then((res) => console.log(res, user, 'SUCCESS'))
              .catch((e) => console.error(123, e));
          }}
        >
          認証
        </button>
      )}
    </>
  );
}

export default App;
