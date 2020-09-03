import * as React from "react";
import Button from "../components/Button";

const Home: React.FC = () =>
(
    <div style={ CenterFlex }>
        <h1>
            los altos club day
        </h1>
        <Button text="start" to="/"/>
    </div>
);

const CenterFlex: React.CSSProperties =
{
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    height: '100vh'
}

export default Home;