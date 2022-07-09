function Section(props) {
  return (
    <div id={props.id} style={{...props.style, height: '100vh'}}>
      {props.children}
    </div>
  );
}

export default Section;
