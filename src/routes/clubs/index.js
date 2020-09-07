import m from "mithril" // this line is important! even if vscode detects this as dead code

import Club from "./club";
import Storage from "../../storage";

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
            {
                Storage.clubs.map((club) =>
                (
                    <a href={`#!/club/${club.id}`} style="text-decoration: none;" target="_blank">
                        <Club name={ club.name || "" } description={ club.description || "" } keywords={ club.keywords || [] } />
                    </a>
                ))
            }
            </div>
        </div>
    )
}

export default Clubs;