import React from "react";
import scrollTo from "../utils/ScrollTo"
import SectionIndicator from "./SectionIndicator";

class FullPageScroller extends React.Component {
  sections = [];
  isScrolling = false;
  state = {
    currentSection: 0,
  }
  sectionIndicatorElement = React.createRef();

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
    scrollTo(this.sections[this.state.currentSection], 700, () => {
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
    if(this.state.currentSection < this.sections.length - 1 && !this.isScrolling) {
      this.state.currentSection += 1;
      this.isScrolling = true;
      this.sectionIndicatorElement.current.updateIndicators(this.state.currentSection);
      scrollTo(this.sections[this.state.currentSection], 700, () => {
        this.isScrolling = false;
      });
    }
  }

  previousSection = () => {
    if(this.state.currentSection > 0 && !this.isScrolling) {
      this.state.currentSection -= 1;
      this.isScrolling = true;
      this.sectionIndicatorElement.current.updateIndicators(this.state.currentSection);
      scrollTo(this.sections[this.state.currentSection], 700, () => {
        this.isScrolling = false;
      });
    }
  }

  render() {
    scrollTo(0, 700, () => {});

    document.addEventListener('keydown', this.detectKeyDown, true);
    document.addEventListener('wheel', this.detectScroll, {passive: false});
    window.addEventListener('resize', this.onResize, true);

    this.updateSections();
    
    return (
      <div className="FullPageScroller" style={{position: 'relative'}}>
        <SectionIndicator ref={this.sectionIndicatorElement} sectionCount={this.sections.length} currentSection={this.state.currentSection} />
        {this.props.children}
      </div>
    );
  }
}

export default FullPageScroller;
