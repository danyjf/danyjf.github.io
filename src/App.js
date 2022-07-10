import React from "react";
import FullPageScroller from "./components/FullPageScroller";
import Section from "./components/Section";

function App () {
  return (
    <div className="App">
      <FullPageScroller>
        <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#282c34'}}>
          <h1 style={{margin: '0px'}}>Section 1</h1>
        </Section>
        <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff5f45'}}>
          <h1 style={{margin: '0px'}}>Section 2</h1>
        </Section>
        <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0798ec'}}>
          <h1 style={{margin: '0px'}}>Section 3</h1>
        </Section>
      </FullPageScroller>
    </div>
  );
}

export default App;
