import "./SectionIndicator.css";

function SectionIndicator(props) {
  let sectionCount = props.sectionCount;
  
  let indicators = [];
  for(let i = 0; i < sectionCount; i++) {
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

export default SectionIndicator;
