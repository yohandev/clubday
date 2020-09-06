import m from "mithril" // this line is important! even if vscode detects this as dead code

import Club from "./club";

/**
 * clubs list route
 */
const Clubs =
{
    view: () =>
    (
        <div id="clubs-body">
            <h1 id="clubs-title" class="title"><span data-text="clubs" class="title-reversed">clubs</span> &nbsp;for you!</h1>
        
            <div id="clubs-list">
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
                <Club name="green team" description="lorem ipsum" />
            </div>
        </div>
    )
}

export default Clubs;