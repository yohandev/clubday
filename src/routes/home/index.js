import m from "mithril" // this line is important! even if vscode detects this as dead code

import Analytics from "../../analytics";
import Motd from "./motd";

/**
 * home route
 */
const Home =
{
    view: () =>
    (
        <div id="home-body">
            {/* <Motd
                message="⚠️ our clubs list isn't finalized yet, and may contain some unapproved clubs. ⚠️"
                details="(please come back during club day on 09/16/2020)"
            /> */}

            <h1 id="home-logo" class="title">los altos <span data-text="club" class="title-reversed">club</span> day</h1>
            <a href="#!/survey">
                <button id="home-button" class="heavy-button" onclick={ Home.onstartclicked }>start</button>
            </a>
            <a href="https://github.com/yohandev/clubday/blob/master/README.md" target="_blank">
                <h1 id="home-footer" class="title">a project from the data analysis club</h1>
            </a>
        </div>
    ),
    onstartclicked: () =>
    {
        Analytics.report('user_pressed_start')
    }
}

var buttonTimer = 0;

export default Home;