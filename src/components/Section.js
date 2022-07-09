function Section(props) {
  return (
    <div style={{...props.style, height: '100vh'}}>
      {props.children}
    </div>
  );
}

export default Section;
