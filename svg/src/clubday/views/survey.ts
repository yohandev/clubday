import * as SVG from "@svgdotjs/svg.js";
import "@svgdotjs/svg.draggable.js";

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

    /**
     * draggable interests
     */
    private interests: SVG.Text[];

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
        
        this.interests =
        [
            this.interest("computers"),
            this.interest("helping others"),
            this.interest("receiving help"),
            this.interest("cultures"),
            this.interest("politics"),
            this.interest("languages"),
            this.interest("books"),
        ];

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
    }

    start(): void
    {
        background.resize(0.5);

        this.gradient.show();
        this.l_txt.show();
        this.r_txt.show();

        this.interests.forEach(i => i.show());
    }

    stop(): void
    {
        this.gradient.hide();
        this.l_txt.hide();
        this.r_txt.hide();

        this.interests.forEach(i => i.hide());
    }

    /**
     * create a new interest
     */
    private interest(name: string): SVG.Text
    {
        // clamped random number
        const rand = () => Math.max(Math.min(Math.random(), 0.75), 0.25);

        const w = width();
        const h = height();

        return canvas
            .text(name)
            .font({
                family: 'Source Sans Pro',
                size: '20pt',
                anchor: 'middle',
            })
            .fill(COLOURS.txt_dark)
            .cx(rand() * w * 0.5)
            .cy(rand() * h)
            .attr({ cursor: "pointer" })
            .draggable()
            .on('dragstart', (e: any) =>
            {
                const w = width();

                this.gradient
                    .animate(500, '>', 0)
                    .cx(w * 0.5)
                    .attr("fill-opacity", "100%")
                    .width(w * 0.1);
                
                const txt: SVG.Text = e.detail.handler.el;

                txt
                    .animate(250)
                    .attr("font-size", "30pt");
            })
            .on('dragend', (e: any) =>
            {
                const w = width();

                this.gradient
                    .animate(500, '-', 0)
                    .cx(w * 0.5)
                    .attr("fill-opacity", "0%")
                    .width(0);

                const txt: SVG.Text = e.detail.handler.el;

                txt
                    .animate(250)
                    .attr("font-size", "20pt");
                
                const { handler, box } = e.detail;
                const mid_delta = 0.5 - (box.cx / w);
                const threshold = 0.075;

                if (Math.abs(mid_delta) < threshold)
                {
                    handler.move(box.x - ((threshold - mid_delta) * w), box.y);
                }
            })
            .front()
            .hide();
    }
}