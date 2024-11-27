import { useState } from "react"
function App() {
  const [number, setNumber] = useState<number>(0);

const handleAdd = () => {
  setNumber(number=>number+1);
}

const handleReset = () => {
  setNumber(0);
}

const handleSubtract = () => {
  setNumber(number=>number-1);
}

  return (
    <div>
      <h2>Simple number change: {number}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>Subtract</button>
    </div>
  )
}

export default App