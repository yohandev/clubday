import * as SVG from "@svgdotjs/svg.js";
import { canvas, width, height } from "./app";

export default class Background
{
    /**
     * fraction of screen where the left half of background ends, and
     * the right begins
     */
    private fraction: number;

    /**
     * left box
     */
    private lt: SVG.Rect;
    /**
     * right box
     */
    private rt: SVG.Rect;

    constructor()
    {
        this.fraction = 0.5;

        // retreive the webview size
        const w = width();
        const h = height();

        this.lt = canvas
            .rect(w * 0.5, h)
            .x(0)
            .y(0)
            .fill('#dd603e');
        this.rt = canvas
            .rect(w * 0.5, h)
            .x(w * 0.5)
            .y(0)
            .fill('#fbb03b');

        // resize dynamically
        window.addEventListener('resize', e =>
        {
            const w = width();
            const h = height();

            // immediately scale
            this.lt
                .size(w * this.fraction, h);
            this.rt
                .size(w * ( 1 - this.fraction), h)
                .x(w * this.fraction);
        });
    }

    /**
     * resize the background to the given left/right ratio, in duration ms
     */
    public resize(frac: number, duration = 400): void
    {
        // retreive the webview size
        const w = width();
        const h = height();

        // immediately scale height
        this.lt.height(h);
        this.rt.height(h);

        // animate
        this.lt
            .animate(duration, '-', 0)
            .size(w * frac, h);
        this.rt
            .animate(duration, '-', 0)
            .x(w * frac)
            .size(w * ( 1 - frac), h);

        // update cached frac
        this.fraction = frac;
    }
}