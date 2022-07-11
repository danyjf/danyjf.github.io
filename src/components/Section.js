function Section(props) {
  return (
    <div className="Section" style={{...props.style, height: '100vh'}}>
      {props.children}
    </div>
  );
}

export default Section;
