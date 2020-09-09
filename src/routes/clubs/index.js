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
            {/* <h1 id="clubs-subtitle" class="title">(click the clubs to learn more)</h1> */}

            <div id="clubs-list">
            {
                Storage.order.map((club) =>
                (
                    <a href={`#!/club/${club.id}`} style="text-decoration: none;" target="_blank">
                        <Club
                            name={ Storage.clubs[club.id].name || "" }
                            description={ Storage.clubs[club.id].description || "" }
                            keywords={ Storage.clubs[club.id].keywords || [] }
                            lacoin={ (Storage.clubs[club.id].lacoin || 'n') == 'y' }
                        />
                    </a>
                ))
            }
            </div>
        </div>
    )
}

export default Clubs;