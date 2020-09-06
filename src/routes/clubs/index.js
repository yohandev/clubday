import m from "mithril" // this line is important! even if vscode detects this as dead code
import CSV from "comma-separated-values"

import Club from "./club";

/**
 * clubs list route
 */
const Clubs =
{
    database: [],
    view: () =>
    (
        <div id="clubs-body">
            <h1 id="clubs-title" class="title"><span data-text="clubs" class="title-reversed">clubs</span> &nbsp;for you!</h1>
        
            <div id="clubs-list">
            {
                Clubs.database.map((club) =>
                (
                    <Club name={ club.name || "" } description={ club.description || "" } keywords={ club.keywords || [] } />
                ))
            }
            </div>
        </div>
    ),
    oninit: () =>
    {
        let req = new XMLHttpRequest();
        
        req.addEventListener("load", (data) =>
        {
            // retrieve the .csv as a string
            const txt = data.currentTarget.responseText;

            // parse .csv
            Clubs.database = new CSV(txt, { header: true }).parse();

            // parse keywords
            for (var i = 0; i < Clubs.database.length; i++)
            {
                Clubs.database[i].keywords = Clubs.database[i].keywords
                    .split(",")
                    .map((s) => s.trim())
            }

            // redraw
            m.redraw()
        })
        req.addEventListener("error", (err) =>
        {
            console.error(err)
        })
        req.open("GET", require("../../../assets/clubs.csv"))
        req.send()
    },
}

export default Clubs;