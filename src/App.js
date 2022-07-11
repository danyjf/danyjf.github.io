import React from "react";
import FullPageScroller from "./components/FullPageScroller";
import Section from "./components/Section";
import SectionHorizontal from "./components/SectionHorizontal";

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
        <SectionHorizontal>
          <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#282c34'}}>
            <h1 style={{margin: '0px'}}>Section 3.1</h1>
          </Section>
          <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff5f45'}}>
            <h1 style={{margin: '0px'}}>Section 3.2</h1>
          </Section>
          <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0798ec'}}>
            <h1 style={{margin: '0px'}}>Section 3.3</h1>
          </Section>
        </SectionHorizontal>
        <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0798ec'}}>
          <h1 style={{margin: '0px'}}>Section 4</h1>
        </Section>
        <SectionHorizontal>
          <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#282c34'}}>
            <h1 style={{margin: '0px'}}>Section 5.1</h1>
          </Section>
          <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff5f45'}}>
            <h1 style={{margin: '0px'}}>Section 5.2</h1>
          </Section>
          <Section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0798ec'}}>
            <h1 style={{margin: '0px'}}>Section 5.3</h1>
          </Section>
        </SectionHorizontal>
      </FullPageScroller>
    </div>
  );
}

export default App;
