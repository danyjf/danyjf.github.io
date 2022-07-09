import React from "react";
import { useEffect } from "react";

function FullPageScroller(props) {
  let sectionList = props.children;
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
    <div className="FullPageScroller">
      {props.children}
    </div>
  );
}

export default FullPageScroller;
