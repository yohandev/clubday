import * as SVG from "@svgdotjs/svg.js";
import Background from "./bg";
import { ViewPath, View } from "./view";
import RootView from "./views/root";
import SurveyView from "./views/survey";
import ResultsView from "./views/results";

/**
 * 'main' method that runs the app
 */
export const run = () =>
{
    // create background
    background = new Background();

    // set view to root by default
    set_view("/survey");
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
 * switch the current view
 */
export const set_view = (path: ViewPath) =>
{
    // stop the current view
    view()?.stop();

    current = views[path];

    // start the current view
    view()?.start();
}

/**
 * background to the webpage
 */
export let background: Background;

/**
 * complete map of all the views in this webpage
 */
export const views: { [key in ViewPath]: View } = 
{
    "/": new RootView(),
    "/survey": new SurveyView(),
    "/results": new ResultsView(),
}

/**
 * current view
 */
let current: View | undefined;

/**
 * returns the currently active view
 */
export const view = () =>
{
    return current;
}