import "./Button.css"

function Button(props) {
  return (
    <a style={
        {
        background: "red",
        padding: "1rem",
        paddingRight: "5rem"
    }
    } href={props.href}>
      <div className="image">
        <img src={props.imageSrc} alt="" />
      </div>
      {props.text}
    </a>
  );
}

export default Button