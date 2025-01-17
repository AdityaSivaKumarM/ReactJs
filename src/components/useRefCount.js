import { useReducer, useRef } from "react";
import "./styles.css";
const reducer = (p) => !p;
export default function App() {
  const counter = useRef(0);
  const [, render] = useReducer(reducer, false);

  function add() {
    // Some 3rd party ref
    counter.current += 1;

    // Render and update the UI
    render();
  }

  return (
    <div>
      <div>{counter.current}</div>
      <button onClick={() => add()}>Add</button>
    </div>
  );
}
