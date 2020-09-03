import { Link } from "react-router-dom";
import * as React from "react";

/**
 * props for a button component
 */
interface Props
{
    text: string,
    to: string,

    size?: number,
}

/**
 * a "large" button with solid drop shadow
 */
const Button: React.FC<Props> = (props) =>
(
    <Link to={ props.to } style={{ textDecoration: 'none' }}>
        <div style={ ButtonStyle(props.size ?? 2) }>
            { props.text }
        </div>
    </Link>
);

/**
 * CSS style for the button
 */
const ButtonStyle: (_: number) => React.CSSProperties = (size) =>
({
    backgroundColor: 'white',
    //padding: `0em ${size}em`,

    border: `${0.0375 * size}em solid black`,
    borderRadius: `${0.25 * size}em`,
    boxShadow: `0px ${0.0375 * size}em black`,

    width: `${2 * size}em`,
    height: `${0.75 * size}em`,

    fontSize: `${size}em`,
    textAlign: 'center',
});

export default Button;