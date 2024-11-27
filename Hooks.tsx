import { useLayoutEffect, useRef, useContext, createContext, useEffect, useState } from "react"

export default function App() {
  // Most useful React Hooks
  // 1. useState - When data changes, re-render the UI
  const [count, setCount] = useState(0);

  // 2. useEffect - When mounted, when state changes
  const onMount = () => {
    console.log('Component mounted!');
    // Any other side effects
    console.log(import.meta.env.VITE_HIDDEN_KEY);
  };
  useEffect(() => {
    onMount();
    return () => {
      // when component is destroyed
    }
  },
  [] // dependecies (the variable we want to detect that changed)
  );

  // 3. useContext - Share data without passing props
  const valueList = {
    first:"Value is first",
    last:"Value is last"
  }
  const contextValue = useContext(createContext(valueList));
  const arrayList = ["zero","one","two","three","four","five","six"];
  const arrayContextValue = useContext(createContext(arrayList));

  // 4. useRef - mutable but not re-render the UI
  const inputValueReference = useRef<HTMLInputElement>(null);
  const alertUserInput = () => {
    // Check if the input is true / not null / has value
    if (inputValueReference.current) {
      alert(inputValueReference.current.value); 
      // Access the input value
    }
  };

  // 5. useLayoutEffect - Exactly like useEffect but blocks visual updates until your callback is finished
  // Runs after the UI is updated
  useLayoutEffect(() => {
    alert("UI Showed");
  }, []);

  return (
    <>
      <h1>useState <br/> Value: {count}</h1>
      <button onClick={() => setCount(count => count+1)}>Add</button>
     <hr/>
      <h1>useContext with JSON</h1>
      <p>{contextValue.last}</p>
      <h1>useContext with array</h1>
      <p>{arrayContextValue[5]}</p>
     <hr/>
      <h1>useRef</h1>
      <input type="text" ref={inputValueReference}></input><br/>
      <button onClick={alertUserInput}>Show user Input</button>
     <hr/>
    </>
  )
}