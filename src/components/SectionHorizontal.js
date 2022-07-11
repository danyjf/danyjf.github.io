import React from "react";
import $ from "jquery";

class SectionHorizontal extends React.Component {
  render() {
    document.onclick = function() {
      let elem = $("#horizontal");
      let previousLeft = parseInt(elem.css('left'));
      previousLeft = previousLeft * (100 / document.documentElement.clientWidth);

      elem.animate({
        left: previousLeft - 100 + 'vw'
      }, 500);
    }

    const childrenWithCorrectStyle = React.Children.map(this.props.children, child => {
      if(React.isValidElement(child)) {
        return React.cloneElement(child, {style: {...child.props.style, width: 100.0 / this.props.children.length + '%', float: 'left'}});
      }
      return child;
    });

    return (
      <div 
        id="horizontal" 
        className="SectionHorizontal" 
        style={{
          position: 'absolute', 
          width: this.props.children.length * 100 + '%', 
          zIndex: '-1'
        }}
      >
        {childrenWithCorrectStyle}
      </div>
    );
  }
}

export default SectionHorizontal;
