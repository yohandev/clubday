import * as React from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";

const Home: React.FC = () =>
(
    <div style={ CenterFlex }>
        <Logo />
        <Button size={ 1.75 } text="start" to="/" />
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