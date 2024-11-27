import {useState, useEffect} from 'react'

// Resize useEffect
export default function App() {
  const [width,setWidth] = useState(window.innerWidth);
  const [height,setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => { // Cleanup code
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");
    return (
      window.removeEventListener("resize", handleResize)
    );
  }, []);

  return (
    <>
    <p>Width: {width}</p>
    <p>Height: {height}</p>
    </>
  )
}