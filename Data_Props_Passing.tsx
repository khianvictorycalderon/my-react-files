import { useState } from "react";

// ListGroup component
interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            onClick={() => setSelectedIndex(index)}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// App component
function App() {
  const items = ["Tayabas", "Sariaya", "Lucena", "Pagbilao", "Marinduque"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;