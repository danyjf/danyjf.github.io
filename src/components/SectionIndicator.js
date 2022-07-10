import React from "react";
import "./SectionIndicator.css";

class SectionIndicator extends React.Component {
  initializeIndicators = () => {
    let indicators = [];

    indicators.push(<div key={0} style={{transform: 'scale(2.5, 2.5)'}} className="dot"></div>);
    for(let i = 1; i < this.sectionCount; i++) {
      indicators.push(<div key={i} className="dot"></div>);
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
        indicators.push(<div key={i} style={{transform: 'scale(2.5, 2.5)'}} className="dot"></div>);
      else
        indicators.push(<div key={i} style={{transform: 'scale(1, 1)'}} className="dot"></div>);
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
