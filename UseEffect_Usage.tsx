import {useState, useEffect} from 'react'

export default function App() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  },[count]);
  function addCount() {
    setCount(c => c + 1);
  }
  function subtractCount() {
    setCount(c => c - 1);
  }
  return (
    <>
     <h1>Count: {count}</h1>
     <button onClick={addCount}>Add</button>
     <button onClick={subtractCount}>Subtract</button>
    </>
  )
}