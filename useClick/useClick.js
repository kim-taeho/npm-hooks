import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = onClick => {
  const element = useRef();
  const handleElement = () => {
    if (element.current) {
      element.current.addEventListner("click", onClick);
    }
    return () => element.current.removeEventListner("click", onClick);
    // unMount 되었을 때 이벤트를 지워줘야 함 (초기화)
  };
  useEffect(handleElement);
  // useEffect는 Mount와 Update될 때 사용 되고, unMount일 때는 위에서 초기화 따로
  return element;
};

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello, []);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
