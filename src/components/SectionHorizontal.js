import React from "react";
import $ from "jquery";

class SectionHorizontal extends React.Component {
  isScrolling = false;

  detectKeyDown = (event) => {
    switch(event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.previousSection();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.nextSection();
        break;
      default:
        break;
    }
  }

  nextSection = () => {
    if(!this.isScrolling) {
      this.isScrolling = true;
      let elements = $(".SectionHorizontal");
      console.log(elements);
      let elem = $("#horizontal");
      let previousLeft = parseInt(elem.css('left'));
      previousLeft = previousLeft * (100 / document.documentElement.clientWidth);

      elem.animate(
        {
          left: previousLeft - 100 + 'vw'
        }, 
        {
          duration: 500,
          complete: e => {
            this.isScrolling = false;
          }
        }
      );
    }
  }

  previousSection = () => {
    if(!this.isScrolling) {
      this.isScrolling = true;
      let elem = $("#horizontal");
      let previousLeft = parseInt(elem.css('left'));
      previousLeft = previousLeft * (100 / document.documentElement.clientWidth);

      elem.animate(
        {
          left: previousLeft + 100 + 'vw'
        }, 
        {
          duration: 500,
          complete: e => {
            this.isScrolling = false;
          }
        }
      );
    }
  }

  render() {
    document.addEventListener('keydown', this.detectKeyDown, true);

    const childrenWithCorrectStyle = React.Children.map(this.props.children, child => {
      if(React.isValidElement(child)) {
        return React.cloneElement(child, {style: {...child.props.style, width: 100.0 / this.props.children.length + '%', float: 'left'}});
      }
      return child;
    });

    return (
      <div style={{height: '100vh'}}>
        <div 
          id="horizontal" 
          className="SectionHorizontal" 
          style={{zIndex: '-1', position: 'absolute', width: this.props.children.length * 100 + '%'}}
        >
          {childrenWithCorrectStyle}
        </div>
      </div>
    );
  }
}

export default SectionHorizontal;
