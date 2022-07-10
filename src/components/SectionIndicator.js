import { render } from "@testing-library/react";
import React from "react";
import "./SectionIndicator.css";

class SectionIndicator extends React.Component {
  sectionCount = this.props.sectionCount;
  
  render() {
    let indicators = [];
    for(let i = 0; i < this.sectionCount; i++) {
      indicators.push(<div key={i} id={i} className="dot"></div>);
    }

    return (
      <div className="SectionIndicator">
        <div className="indicatorsWrapper">
          {indicators}
        </div>
      </div>
    );
  }
}

export default SectionIndicator;
