import React from "react";
import { useEffect } from "react";

function App () {
  let sectionList = [
    <div key='1' id="section1" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff0000'}}>
      <h1 style={{margin: '0px'}}>Section 1</h1>
    </div>,
    <div key='2' id="section2" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00ff00'}}>
      <h1 style={{margin: '0px'}}>Section 2</h1>
    </div>,
    <div key='3' id="section3" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0000ff'}}>
      <h1 style={{margin: '0px'}}>Section 3</h1>
    </div>
  ];
  let currentSection = 1;
  let isScrolling = false;

  const nextSection = () => {
    if(currentSection !== sectionList.length && !isScrolling) {
      currentSection += 1;
      isScrolling = true;
      document.querySelector(`#section${currentSection}`).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  const previousSection = () => {
    if(currentSection !== 1 && !isScrolling) {
      currentSection -= 1;
      isScrolling = true;
      document.querySelector(`#section${currentSection}`).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
 
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
    document.addEventListener('wheel', detectScroll, {passive: false});
    document.addEventListener('scroll', detectScrollFinished);
  });
  
  let timer;
  const detectScrollFinished = () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      isScrolling = false;
    }, 75);
  }

  const detectScroll = (event) => {
    event.preventDefault();

    if(event.wheelDelta < 0) {
      nextSection();
    } else {
      previousSection();
    }
  }

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
      default:
        break;
    }
  }

  return (
    <div className="App">
      {sectionList}
    </div>
  );
}

export default App;
