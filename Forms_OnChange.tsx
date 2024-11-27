import React, { useState } from 'react'

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [number, setNumber] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("visa");
  const [shipping, setShipping] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }
  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }
  const handlePaymentChange = (event) => {
    setPayment(event.target.value)
  }
  const handleShippingChange = (event) => {
    setShipping(event.target.value)
  }
  return (
    <div>
      <input onChange={handleNameChange}/>
      <p>Name: {name}</p>
      <br />
      <input onChange={handleNumberChange} type="number"/>
      <p>Age: {number}</p>
      <br />
      <textarea onChange={handleCommentChange} placeholder="Enter a comment..."></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="gcash">GCash</option>
        <option value="visa">VISA</option>
        <option value="mastercard">MasterCard</option>
        <option value="paypal">PayPal</option>
      </select>
      <p>Payment: {payment}</p>

      <br />

      <label>
        <input name="sampleID" type="radio" value="Pick Up" onChange={handleShippingChange}/>
        Pickup
      </label>
      <label>
        <input name="sampleID" type="radio" value="Delivery" onChange={handleShippingChange}/>
        Delivery
      </label>
    </div>
  )
}

export default function App() {
  return (
    <MyComponent />
  )
}