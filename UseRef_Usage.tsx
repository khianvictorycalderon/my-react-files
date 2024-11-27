import { useRef } from 'react';

export default function App() {
  const div = useRef<HTMLDivElement>(null);
  const handleUpdate = () => {
    if(div.current) {
      div.current.innerHTML = "This is the updated content";
    }
  }
  return (
    <div>
      <div ref={div}>
        This is the original
      </div>
      <button onClick={handleUpdate}>Change</button>
    </div>
  )
}