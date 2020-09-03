import { Link } from "react-router-dom";
import * as React from "react";

/**
 * props for a button component
 */
interface Props
{
    text: string,
    to: string,
}

/**
 * a "large" button with solid drop shadow
 */
const Button: React.FC<Props> = (props) =>
(
    <div>
        <Link to={ props.to } style={ ButtonStyle }>
            <h3>
                { props.text }
            </h3>
        </Link>
    </div>
);

/**
 * CSS style for the button
 */
const ButtonStyle: React.CSSProperties =
{
    backgroundColor: 'black'
}

export default Button;