import React from "react";
import FullPageScroller from "./components/FullPageScroller";

function App () {
  return (
    <div className="App">
      <FullPageScroller>
        <div key='1' id="section1" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff0000'}}>
          <h1 style={{margin: '0px'}}>Section 1</h1>
        </div>
        <div key='2' id="section2" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00ff00'}}>
          <h1 style={{margin: '0px'}}>Section 2</h1>
        </div>
        <div key='3' id="section3" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0000ff'}}>
          <h1 style={{margin: '0px'}}>Section 3</h1>
        </div>
      </FullPageScroller>
      {/* {sectionList} */}
    </div>
  );
}

export default App;
