import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="title">React Counter App</h1>

      <div className="counter-card">
        <p className="count">{count}</p>

        <div className="buttons">
          <button className="btn decrease" onClick={decrease}>
            −
          </button>

          <button className="btn reset" onClick={reset}>
            Reset
          </button>

          <button className="btn increase" onClick={increase}>
            +
          </button>
        </div>
      </div>

      <p className="footer">Built with React ⚛️</p>
    </div>
  );
}

export default App;