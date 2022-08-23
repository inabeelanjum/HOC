import "./App.css";
import React, { useRef, useState } from "react";
function App() {
  return (
    <div className="App">
      <h1>HOC </h1>

      <Wrapper />
      <Wrapper2>
        <Counter />
      </Wrapper2>
      <Wrapper3 cmp={Counter}></Wrapper3>
    </div>
  );
}
function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100, zIndex: 2 }}>
      Red
      {props()}
    </h2>
  );
}
function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: 100, zIndex: 4 }}>
      Grren
      <props.cmp />
    </h2>
  );
}
function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 100, zIndex: 3 }}>
      blue <props.cmp />
    </h2>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
const Wrapper = () => {
  return HOCRed(Counter);
};
const Wrapper2 = (props) => {
  return (
    <h2 style={{ backgroundColor: "green", width: 100, zIndex: 3 }}>
      blue {props.children}
    </h2>
  );
};
const Wrapper3 = (props) => {
  return (
    <div>
      <HOCBlue {...props} />
    </div>
  );
};

export default React.memo(App);
