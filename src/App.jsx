import { useState } from 'react'
import './App.css'
import UseReducerHook from './components/UseReducerHook';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseReducerHook/>
    </>
  );
};

export default App
