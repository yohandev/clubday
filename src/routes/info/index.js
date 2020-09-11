import m from "mithril" // this line is important! even if vscode detects this as dead code

import Club from "../clubs/club";
import Storage from "../../storage";
import Analytics from "../../analytics";

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
            <div>
                <div id="club-info">
                    <Club
                        name={ Storage.clubs[vnode.attrs.id].name || "" }
                        description={ Storage.clubs[vnode.attrs.id].description || "" }
                        keywords={ Storage.clubs[vnode.attrs.id].keywords || [] }
                    />
                    <div class="clubs-list-item">
                        <h2>What activities club members would be doing during their time?</h2>
                        {
                            Storage.clubs[vnode.attrs.id].activities
                                .split('<br>')
                                .map((ln) => (<p>{ ln }</p>))
                        }
                    </div>
                    <div class="clubs-list-item">
                        <h2>What makes the club interesting/why should someone join?</h2>
                        {
                            Storage.clubs[vnode.attrs.id].interesting
                                .split('<br>')
                                .map((ln) => (<p>{ ln }</p>))
                        }
                    </div>
                </div>
                <a href={ Storage.clubs[vnode.attrs.id].signup }>
                    <button
                        id="club-info-join-button"
                        class="heavy-button"
                        onclick={ () => { if (vnode.attrs.ord) Analytics.report('join_club', { ord: vnode.attrs.ord, id: vnode.attrs.id }) }}
                    >
                        join
                    </button>
                </a>
                <a href={ Storage.clubs[vnode.attrs.id].zoom }>
                    <button
                        id="club-info-zoom-button"
                        class="heavy-button"
                        onclick={ () => { if (vnode.attrs.ord) Analytics.report('attend_zoom', { ord: vnode.attrs.ord, id: vnode.attrs.id }) }}
                    >
                        attend zoom
                    </button>
                </a>
            </div>
        )
    ),
}

export default ClubInfo;