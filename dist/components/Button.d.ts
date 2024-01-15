import React from "react";
type Props = {
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
};
declare function Button({ text, onClick, style }: Props): React.JSX.Element;
export default Button;
