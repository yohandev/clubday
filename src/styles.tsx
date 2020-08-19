import { CSSProperties } from "react";
import Colours from "./colours";

/**
 * all the styles used in this website
 * 
 * ...because CSS is doodoo
*/
namespace Styles
{
    /** left of background styles */
    export const LEFT: (_: number) => CSSProperties = (frac) =>
    {
        return {
            position: "absolute",
            left: "0px",
            width: `${frac * 100.0}%`,
            height: "100%",
            overflow: "hidden",
            background: Colours.Left.PRIMARY,
        }
    }

    /** right of background styles */
    export const RIGHT: (_: number) => CSSProperties = (frac) =>
    {
        return {
            position: "absolute",
            right: "0px",
            width: `${(1.0 - frac) * 100.0}%`,
            height: "100%",
            overflow: "hidden",
            background: Colours.Right.PRIMARY,
        }
    }
}

export default Styles;