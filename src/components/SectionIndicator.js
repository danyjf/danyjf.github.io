﻿import React from "react";
import "./SectionIndicator.css";
import scrollTo from "../utils/ScrollTo";

class SectionIndicator extends React.Component {
  initializeIndicators = () => {
    let indicators = [];

    indicators.push(<div key={0} style={{transform: 'scale(2.5, 2.5)'}} className="dot" onClick={event => this.props.onIndicatorClick(event, 0)}></div>);
    for(let i = 1; i < this.sectionCount; i++) {
      indicators.push(<div key={i} className="dot" onClick={event => this.props.onIndicatorClick(event, i)}></div>);
    }
    
    return indicators;
  }
  
  sectionCount = this.props.sectionCount;
  state = {
    indicators: this.initializeIndicators()
  }

  updateIndicators = (currentSection) => {
    let indicators = [];

    for(let i = 0; i < this.sectionCount; i++) {
      if(i === currentSection)
        indicators.push(<div key={i} style={{transform: 'scale(2.5, 2.5)'}} className="dot" onClick={event => this.props.onIndicatorClick(event, i)}></div>);
      else
        indicators.push(<div key={i} style={{transform: 'scale(1, 1)'}} className="dot" onClick={event => this.props.onIndicatorClick(event, i)}></div>);
    }
    
    this.setState({
      indicators: indicators
    });
  }
  
  render() {
    return (
      <div className="SectionIndicator">
        <div className="indicatorsWrapper">
          {this.state.indicators}
        </div>
      </div>
    );
  }
}

export default SectionIndicator;
