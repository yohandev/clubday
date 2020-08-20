/**
 * represents a view in the webpage, kind of like a sub-page.
 * 
 * the constructor can add SVG elements to the webpage, but
 * they must be hidden, only to be shown on the start method.
 */
export interface View
{
    /**
     * start this view, adding and/or showing the SVG elements
     * for this view
     */
    start(): void;

    /**
     * stop this view, hiding and/pr removing the SVG elements
     * for this view
     */
    stop(): void;
}

/**
 * enum of all the views in this webpage
 * 
 * feel free to add more here...
 */
export type ViewPath = '/' | '/survey' | '/results';