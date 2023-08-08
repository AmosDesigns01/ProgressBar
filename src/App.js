import "./styles.css";
import { useState } from "react";
import ProgressBar from "./circleProgressBar";

export default function App() {
  const [value, setValue] = useState();
  const changeValue = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className="curved">
        <ProgressBar value={value} circleWidth="200" />
        <input type="number" max="100" min="0" onChange={changeValue} />
      </div>
    </div>
  );
}
