import React from "react";
import scrollTo from "../utils/ScrollTo"
import SectionIndicator from "./SectionIndicator";

class FullPageScroller extends React.Component {
  sections = [];
  currentSection = 0;
  isScrolling = false;

  detectScroll = (event) => {
    event.preventDefault();

    if(event.wheelDelta < 0) {
      this.nextSection();
    } else {
      this.previousSection();
    }
  }

  detectKeyDown = (event) => {
    switch(event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.nextSection();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.previousSection();
        break;
      default:
        break;
    }
  }

  onResize = () => {
    this.updateSections();
    scrollTo(this.sections[this.currentSection], 700, () => {
      this.isScrolling = false;
    });
  }

  updateSections = () => {
    this.sections = [];

    for(let i = 0; i < this.props.children.length; i++) {
      this.sections.push(window.innerHeight * i);
    }
  }

  nextSection = () => {
    if(this.currentSection < this.sections.length - 1 && !this.isScrolling) {
      this.currentSection += 1;
      this.isScrolling = true;
      this.updateSectionIndicators();
      scrollTo(this.sections[this.currentSection], 700, () => {
        this.isScrolling = false;
      });
    }
  }

  previousSection = () => {
    if(this.currentSection > 0 && !this.isScrolling) {
      this.currentSection -= 1;
      this.isScrolling = true;
      this.updateSectionIndicators();
      scrollTo(this.sections[this.currentSection], 700, () => {
        this.isScrolling = false;
      });
    }
  }

  updateSectionIndicators = () => {
    document.getElementById(this.currentSection).style.transform = 'scale(2.5, 2.5)';
  }

  render() {
    document.addEventListener('keydown', this.detectKeyDown, true);
    document.addEventListener('wheel', this.detectScroll, {passive: false});
    window.addEventListener('resize', this.onResize, true);
    this.updateSections();
    return (
      <div className="FullPageScroller" style={{position: 'relative'}}>
        <SectionIndicator sectionCount={this.sections.length} />
        {this.props.children}
      </div>
    );
  }
}

export default FullPageScroller;
