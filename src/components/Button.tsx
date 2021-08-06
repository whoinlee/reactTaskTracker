type Props = {
    color: string;
    text: string;
    onClick: () => void;
};
const Button = ({ color, text, onClick }:Props) => {
  return (
    <button className="btn" onClick={onClick} style={ {backgroundColor: color} }>
        {text}
    </button>
  )
};

export default Button;
