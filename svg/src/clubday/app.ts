import * as SVG from "@svgdotjs/svg.js";
import Background from "./bg";

/**
 * 'main' method that runs the app
 */
export const run = () =>
{
    // ...
    console.log("world, hello");

    background = new Background();

    window.addEventListener('click', e =>
    {
        background.resize(Math.random());
    });
}

/**
 * get the total width of the webpage
 */
export const width = () =>
{
    return Math.max
    (
        document.body.scrollWidth,
        document.body.offsetWidth, 
        document.documentElement.clientWidth,
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth,
    );
}

/**
 * get the total height of the webpage
 */
export const height = () =>
{
    return Math.max
    (
        document.body.scrollHeight,
        document.body.offsetHeight, 
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
    );
}

/**
 * the top-most SVG element in this website
 */
export const canvas = new SVG.Svg()
    .addTo("#app")
    .size("100%", "100%");

/**
 * background to the webpage
 */
export let background: Background;