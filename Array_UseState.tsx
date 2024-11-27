import {useState} from 'react'

// Array Use State

export default function App() {
  const [foods, setFood] = useState([
    "Apple",
    "Mango",
    "Banana"
  ]);

  const handleAddFood = () => {
    const inputFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFood(f => [...f, inputFood]);
  }

  function handleRemoveFood(index) {
    setFood(foods.filter((_, i) => i != index));
  }

  return (
    <div>
      Food List:
      <ul>
        {foods.map((item, index)=> 
        <li 
           key={index}
           onClick={()=>{handleRemoveFood(index)}}
        >{item}</li>
        )}
      </ul>
      <input id="foodInput" type="text" placeholder="Enter Food Name..."/>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}