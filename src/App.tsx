import './App.css';
import { useTodo } from './queries/useTodo';
import Subscription from './components/Subscription';

function App() {
  const { fetching, error, todoList } = useTodo();

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <div className="app">
        {todoList.map((todo, i) => (
          <div className="todo-item" key={i}>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
          </div>
        ))}
      </div>
      <Subscription />
    </>
  );
}

export default App;
