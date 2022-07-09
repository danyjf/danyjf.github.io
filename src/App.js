import React from "react";
import { useEffect } from "react";

function App () {
  let currentSection = 1;

  const nextSection = () => {
    currentSection += 1;
    window.location.href = `#section${currentSection}`;
  }

  const previousSection = () => {
    currentSection -= 1;
    window.location.href = `#section${currentSection}`;
  }
 
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  });

  const detectKeyDown = (event) => {
    switch(event.key) {
      case 'ArrowDown':
        event.preventDefault();
        nextSection();
        break;
      case 'ArrowUp':
        event.preventDefault();
        previousSection();
        break;
    }
  }

  return (
    <div className="App">
      <div id="section1" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff0000'}}>
        <h1 style={{margin: '0px'}}>Section 1</h1>
      </div>
      <div id="section2" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00ff00'}}>
        <h1 style={{margin: '0px'}}>Section 2</h1>
      </div>
      <div id="section3" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0000ff'}}>
        <h1 style={{margin: '0px'}}>Section 3</h1>
      </div>
    </div>
  );
}

export default App;
