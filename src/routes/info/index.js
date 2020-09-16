import m from "mithril" // this line is important! even if vscode detects this as dead code

import Club from "../clubs/club";
import Storage from "../../storage";
import Analytics from "../../analytics";
import Mobile from "../../utils/mobile";

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
                    {
                        Storage.clubs[vnode.attrs.id].video == 'none' ? undefined :
                        <div class="clubs-list-item">
                            <h2>Introduction Video</h2>
                            <iframe width="640" height="360" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src={ Storage.clubs[vnode.attrs.id].video }></iframe>
                        </div>
                    }
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
                {
                    Storage.clubs[vnode.attrs.id].zoom != 'none' ?
                    <a href={ Storage.clubs[vnode.attrs.id].zoom } onclick={ () => { if (Mobile.hastouch()) alert("zoom sessions will take place from 4:00PM to 4:30PM on wednesday") } }>
                        <button
                            id="club-info-zoom-button"
                            class="heavy-button btntooltip"
                            onclick={ () =>
                                {
                                    if (vnode.attrs.ord)
                                    {
                                        Analytics.report('attend_zoom', { ord: vnode.attrs.ord, id: vnode.attrs.id })
                                    }
                                    console.log(Storage.clubs[vnode.attrs.id]);
                                    if (Storage.clubs[vnode.attrs.id].password != 'none')
                                    {
                                        alert(`This club's zoom meeting requires a password: ${Storage.clubs[vnode.attrs.id].password}`)
                                    }
                                }
                            }
                        >
                                attend zoom
                                &nbsp;
                                <i class="fa fa-info-circle" style="font-size: 0.75em"></i>
                                <span class="btntooltiptext">zoom sessions will take place from 4:00PM to 4:30PM on wednesday</span>
                        </button>
                    </a>
                    : undefined
                }
            </div>
        )
    ),
}

export default ClubInfo;