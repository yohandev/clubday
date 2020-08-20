import * as SVG from "@svgdotjs/svg.js";
import { View } from "../view";
import { canvas, width, background } from "../app";
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

    constructor()
    {
        this.l_txt = canvas
            .text("I'm not interested in...")
            .font({
                family: 'Helvetica',
                size: '20pt',
                anchor: 'middle',
            })
            .fill(COLOURS.bg_right)
            .cx(width() * 0.25)
            .y(20)
            .hide();
        this.r_txt = canvas
            .text("I'm interested in...")
            .font({
                family: 'Helvetica',
                size: '20pt',
                anchor: 'middle',
            })
            .fill(COLOURS.bg_left)
            .cx(width() * 0.75)
            .y(20)
            .hide();

        // resize dynamically
        window.addEventListener('resize', e =>
        {
            const w = width();

            this.l_txt.cx(w * 0.25)
            this.r_txt.cx(w * 0.75)
        });
    }

    start(): void
    {
        background.resize(0.5);

        this.l_txt.show();
        this.r_txt.show();
    }

    stop(): void
    {
        this.l_txt.hide();
        this.r_txt.hide();
    } 
}