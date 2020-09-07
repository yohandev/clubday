import m from "mithril" // this line is important! even if vscode detects this as dead code

import Club from "../clubs/club";
import Storage from "../../storage";

/**
 * club info page
 */
const ClubInfo =
{
    view: (vnode) =>
    (
        Storage.clubs.length == 0 ?
        (
            <div>
                loading...
            </div>
        )
        :
        (
            <div id="club-info">
                <Club
                    name={ Storage.clubs[vnode.attrs.id].name || "" }
                    description={ Storage.clubs[vnode.attrs.id].description || "" }
                    keywords={ Storage.clubs[vnode.attrs.id].keywords || [] }
                />
                <div class="clubs-list-item">
                    <h2> what is love </h2>
                    <p> baby don't hurt me </p>
                </div>
            </div>
        )
    )
}

export default ClubInfo;