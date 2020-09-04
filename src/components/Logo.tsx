import * as React from "react";

/**
 * los altos club day logo component
 */
const Logo: React.FC = () =>
(
    <div style={ NormalStyle }>
        los altos <span style={ OutlineStyle }>club</span> day
    </div>
);

const NormalStyle: React.CSSProperties =
{
    fontSize: '3em',
    fontFamily: 'Poppins',

    color: '#231f20'
};

const OutlineStyle: React.CSSProperties =
{
    color: 'white',
    paintOrder: 'fill stroke',

    textShadow: `
        -0.1em -0.1em 0 #231f20,
        0   -0.1em 0 #231f20,
        0.1em -0.1em 0 #231f20,
        0.1em  0   0 #231f20,
        0.1em  0.1em 0 #231f20,
        0    0.1em 0 #231f20,
        -0.1em  0.1em 0 #231f20,
        -0.1em  0   0 #231f20`,
    width: '150%'
};

export default Logo;