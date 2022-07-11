import React from "react";

class SectionHorizontal extends React.Component {
  
  render() {
    const childrenWithCorrectStyle = React.Children.map(this.props.children, child => {
      if(React.isValidElement(child)) {
        return React.cloneElement(child, {style: {...child.props.style, width: 100.0 / this.props.children.length + '%', float: 'left'}});
      }
      return child;
    });

    return (
      <div className="SectionHorizontal" style={{width: this.props.children.length * 100 + '%'}}>
        {childrenWithCorrectStyle}
      </div>
    );
  }
}

export default SectionHorizontal;
