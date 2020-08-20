import * as SVG from "@svgdotjs/svg.js";
import { View } from "../view";
import { canvas, width, background, height } from "../app";
import { COLOURS } from "../style";

/**
 * 'choose your interests...' view
 */
export default class SurveyView implements View
{
    /**
     * I'm not interested in...
     */
    private l_txt: SVG.Text;

    /**
     * I'm interested in...
     */
    private r_txt: SVG.Text;

    /**
     * stylistic gradient between left and right sides of the background,
     * that triggers when a drag begins
     */
    private gradient: SVG.Rect;

    constructor()
    {
        // retreive the webview size
        const w = width();
        const h = height();

        this.gradient = canvas
            .rect(0, h)
            .cx(w * 0.5)
            .fill(canvas.gradient('linear', (add) =>
            {
                add.stop(0, COLOURS.bg_left);
                add.stop(1, COLOURS.bg_right);
            }))
            .hide();

        this.l_txt = canvas
            .text("I'm not interested in...")
            .font({
                family: 'Source Sans Pro',
                size: '28pt',
                anchor: 'middle',
            })
            .fill(COLOURS.bg_right)
            .cx(w * 0.25)
            .y(20)
            .front()
            .hide();
        this.r_txt = canvas
            .text("I'm interested in...")
            .font({
                family: 'Source Sans Pro',
                size: '28pt',
                anchor: 'middle',
            })
            .fill(COLOURS.bg_left)
            .cx(w * 0.75)
            .y(20)
            .front()
            .hide();

        // resize dynamically
        window.addEventListener('resize', e =>
        {
            const w = width();
            const h = height();

            this.gradient
                .height(h)
                .cx(w * 0.5);

            this.l_txt.cx(w * 0.25)
            this.r_txt.cx(w * 0.75)
        });

        window.addEventListener('mousedown', e =>
        {
            const w = width();

            this.gradient
                .animate(500, '>', 0)
                .cx(w * 0.5)
                .width(w * 0.1);
        });

        window.addEventListener('mouseup', e =>
        {
            const w = width();

            this.gradient
                .animate(500, '-', 0)
                .cx(w * 0.5)
                .width(0);
        });
    }

    start(): void
    {
        background.resize(0.5);

        this.gradient.show();
        this.l_txt.show();
        this.r_txt.show();
    }

    stop(): void
    {
        this.gradient.hide();
        this.l_txt.hide();
        this.r_txt.hide();
    } 
}