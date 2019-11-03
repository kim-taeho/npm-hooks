import React, { useState } from "react";
import ReactDOM from "react-dom";

export const useTabs = (initialTab, allTab) => {
  if (!allTab || Array.isArray(allTab)) {
    return;
  } else {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItem: allTab[currentIndex],
      changeItem: setCurrentIndex
    };
  }
};

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2"
  }
];

function App() {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
      {content.map((element, index) => (
        <button onClick={() => changeItem(index)}>{element.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
