import './App.css';
import Detail from './components/Detail';
import Todo from './components/Todo';
// import Subscription from './components/Subscription';

function App() {
  return (
    <div className="top-container">
      <Todo />
      <Detail />
      {/* <Subscription /> */}
    </div>
  );
}

export default App;
