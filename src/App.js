import React from "react";
import FullPageScroller from "./components/FullPageScroller";
import Section from "./components/Section";

function App () {
  return (
    <div className="App">
      <FullPageScroller>
        <Section id="section1" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff0000'}}>
          <h1 style={{margin: '0px'}}>Section 1</h1>
        </Section>
        <Section id="section2" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00ff00'}}>
          <h1 style={{margin: '0px'}}>Section 2</h1>
        </Section>
        <Section id="section3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0000ff'}}>
          <h1 style={{margin: '0px'}}>Section 3</h1>
        </Section>
      </FullPageScroller>
    </div>
  );
}

export default App;
