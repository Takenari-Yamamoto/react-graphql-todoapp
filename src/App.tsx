import { useCallback, useState } from "react";
import "./App.css";
import Header, { PageType } from "./components/header/Header";
import TodoPage from "./features/todo/page/TodoPage";
import UserPage from "./features/users/page/UserPage";

function App() {
  const [page, setPage] = useState<PageType>("Top");
  const handleSetPage = useCallback(
    (page: PageType) => {
      setPage(page);
    },
    [page]
  );

  return (
    <>
      <Header handleSelect={handleSetPage} />
      <div className='app-container'>
        {page === "Top" && <TodoPage />}
        {page === "User" && <UserPage />}
      </div>
    </>
  );
}

export default App;
