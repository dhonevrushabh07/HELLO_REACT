import { useState } from "react";

export default function App() {
  let [counter, setCounter] = useState(100);

  let Increment = () => setCounter(counter + 1);
  let Decrement = () => setCounter(counter - 1);

  return (
    <div>
      <div>{counter}</div>
      <input type="button" value="Increment" onClick={Increment}></input>
      <input type="button" value="Decrement" onClick={Decrement}></input>
    </div>
  );
}
