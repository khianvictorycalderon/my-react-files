import {useState} from 'react'

// Object Use State

export default function App() {
  const [car, setCar] = useState({
    year:2004,
    manufacturer:"Ford",
    model:"Mustang"
  });

  const handleYearChange = (event: any) => {
    setCar(c => ({...c, year: event.target.value}));
  }
  const handleManufacturerChange = (event: any) => {
    setCar(c => ({...c, manufacturer: event.target.value}));
  }
  const handleModelChange = (event: any) => {
    setCar(c => ({...c, model: event.target.value}));
  }

  return (
    <div>
      <p>Your car is {car.year} {car.manufacturer} {car.model}</p>
      <input onChange={handleYearChange} type="number" value={car.year}/><br />
      <input onChange={handleManufacturerChange} type="text" value={car.manufacturer}/><br />
      <input onChange={handleModelChange} type="text" value={car.model}/><br />
    </div>
  )
}