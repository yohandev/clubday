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
const ButtonStyle: (s: number) => React.CSSProperties = (size) =>
({
    backgroundColor: 'white',
    padding: `0.25em ${size * 1.5}em`,

    border: `${0.0375 * size}em solid #231f20`,
    borderRadius: `${0.25 * size}em`,
    boxShadow: `0px ${0.0375 * size}em #231f20`,

    fontSize: `${size}em`,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    color: '#231f20'
});

export default Button;