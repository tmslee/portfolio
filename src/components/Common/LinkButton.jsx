export default function LinkButton (props) {
  const {
    text,
    onClick,
    style
  } = props;

  return (
    <div
      onClick={onClick}
      style={style}
    >
      {text}
    </div>
  );
};