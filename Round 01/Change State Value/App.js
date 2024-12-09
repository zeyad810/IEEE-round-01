import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(["item", "item2"]);
  const [obj, setObj] = useState({
    name: "Zeyad",
    collage: "Cs",
  });

  function handleIncCount() {
    setCount(count + 1);
  }
  function handleDecCount() {
    setCount(count - 1);
  }
  function handleArrValue() {
    setArr([...arr, "Added Item"]);
  }
  function handleObj() {
    setObj({ ...obj, dep: "it" });
  }

  return (
    <div>
      {/* Primitive Data Type Manipulation */}
      <button onClick={handleIncCount}> + </button>
      <span> {count} </span>
      <button onClick={handleDecCount}> - </button>

      {/* Non-Primitive Data Type Manipulation */}
      {/* Array Manipulation */}
      <div>
        <h3>Array:</h3>
        <ul>
          {arr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={handleArrValue}>Add to Array</button>
      </div>

      {/* Object Manipulation */}
      <div>
        <h3>Object:</h3>
        <p>Name: {obj.name}</p>
        <p>Collage: {obj.collage}</p>
        {obj.dep && <p>Department: {obj.dep}</p>}
        <button onClick={handleObj}>Update Object</button>
      </div>
    </div>
  );
}

export default App;
