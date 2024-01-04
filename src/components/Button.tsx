import React from "react";

type Props = {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

function Button({ text, onClick, style }: Props) {
  return (
    <div onClick={onClick} style={style}>
      {text}
    </div>
  );
}

export default Button;
