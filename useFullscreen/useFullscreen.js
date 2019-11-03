import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};
const App = () => {
  const { element, triggerFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <img
        ref={element}
        src="/media/examples/grapefruit-slice-332-332.jpg"
        alt="img"
      />
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
