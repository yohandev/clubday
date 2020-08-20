import * as React from "react";
import Styles from "../styles";

interface Props { }
interface State { }

export default class Survey extends React.Component<Props, State>
{
    render()
    {
        // left/right background with two <div/>s
        return (
            <>
            <div className="left" style={Styles.LEFT(0.5)}>
                <h1>
                I'm not interested in...
                </h1>
            </div>
            <div className="right" style={Styles.RIGHT(0.5)}>
                <h1>
                I'm interested in...
                </h1>
            </div>
            </>
        )
    }
}