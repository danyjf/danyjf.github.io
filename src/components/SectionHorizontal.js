import React from "react";

class SectionHorizontal extends React.Component {
  render() {  
    return (
      <div className="SectionHorizontal">
        {this.props.children}
      </div>
    );
  }
}

export default SectionHorizontal;
