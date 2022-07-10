import "./SectionIndicator.css";

function SectionIndicator(props) {
  let sectionCount = props.sectionCount;
  
  let indicators = [];
  for(let i = 0; i < sectionCount; i++) {
    indicators.push(<span key={i} className="dot"></span>);
  }

  return (
    <div className="SectionIndicator">
      {indicators}
    </div>
  );
}

export default SectionIndicator;
