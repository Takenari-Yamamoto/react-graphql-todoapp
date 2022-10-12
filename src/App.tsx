import "./App.css";
import { useTodo } from "./queries/useTodo";

function App() {
  const { fetching, error, todoList } = useTodo();

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className='app'>
      {todoList.map((todo, i) => (
        <div className='todo-item' key={i}>
          <p>id: {todo.id}</p>
          <p>title: {todo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
