import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = event => {
    setState({ y: window.scrollY, x: window.scrollX });
    // console.log("y :", window.scrollY, " x : ", window.scrollX);
    // window객체에 현재 스크롤 위치가 담겨있음
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
