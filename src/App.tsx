import { useCallback, useState } from 'react';
import './App.css';
import Header, { PageType } from './components/header/Header';
import AuthPage from './features/auth/page/AuthPage';
import TodoPage from './features/todo/page/TodoPage';
import UserPage from './features/users/page/UserPage';

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [page, setPage] = useState<PageType>('Top');
  const handleSetPage = useCallback(
    (page: PageType) => {
      setPage(page);
    },
    [page]
  );

  return (
    <>
      <Header handleSelect={handleSetPage} />
      {isLoggedIn ? (
        <div className="app-container">
          {page === 'Top' && <TodoPage />}
          {page === 'User' && <UserPage />}
        </div>
      ) : (
        <AuthPage />
      )}
    </>
  );
}

export default App;
