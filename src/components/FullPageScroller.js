import React from "react";
import { useEffect } from "react";
import scrollTo from "../utils/ScrollTo"

function FullPageScroller(props) {
  let sections = [];
  let currentSection = 0;
  let isScrolling = false;

  useEffect(() => {
    updateSections();
    document.addEventListener('keydown', detectKeyDown, true);
    document.addEventListener('wheel', detectScroll, {passive: false});
    window.addEventListener('resize', onResize, true);
  });

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

  const onResize = () => {
    updateSections();
    scrollTo(sections[currentSection], 700, () => {
      isScrolling = false;
    });
  }

  const updateSections = () => {
    sections = [];

    for(let i = 0; i < props.children.length; i++) {
      sections.push(window.innerHeight * i);
    }
  }

  const nextSection = () => {
    if(currentSection < sections.length - 1 && !isScrolling) {
      currentSection += 1;
      isScrolling = true;
      scrollTo(sections[currentSection], 700, () => {
        isScrolling = false;
      });
    }
  }

  const previousSection = () => {
    if(currentSection > 0 && !isScrolling) {
      currentSection -= 1;
      isScrolling = true;
      scrollTo(sections[currentSection], 700, () => {
        isScrolling = false;
      });
    }
  }

  return (
    <div className="FullPageScroller">
      {props.children}
    </div>
  );
}

export default FullPageScroller;
