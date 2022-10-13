import { useCallback, useState } from 'react';
import './App.css';
import Detail from './components/Detail';
import Todo from './components/Todo';
// import Subscription from './components/Subscription';

function App() {
  const [selectedTodo, setSelected] = useState<number>(0);
  const handleSelect = useCallback((id: number) => setSelected(id), []);

  return (
    <div className="top-container">
      <Todo handleSelect={handleSelect} />
      <Detail id={selectedTodo} />
      {/* <Subscription /> */}
    </div>
  );
}

export default App;
