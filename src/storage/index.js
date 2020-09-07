import m from "mithril" // this line is important! even if vscode detects this as dead code
import CSV from "comma-separated-values"

/**
 * static storage for clubs database and eventually more
 */
const Storage =
{
    clubs: [],
    order: [],
    fetch: () =>
    {
        let req = new XMLHttpRequest();
        
        req.addEventListener("load", (data) =>
        {
            // retrieve the .csv as a string
            const txt = data.currentTarget.responseText;

            // parse .csv
            Storage.clubs = new CSV(txt, { header: true }).parse();

            // reset order
            Storage.order = [];

            // hand correct received data
            for (var i = 0; i < Storage.clubs.length; i++)
            {
                // parse keywords
                Storage.clubs[i].keywords = Storage.clubs[i].keywords
                    .split(",")
                    .map((s) => s.trim())
                
                // place id
                Storage.clubs[i].id = i

                // populate order
                Storage.order.push({ id: i, likes: 0 });
            }

            // redraw
            m.redraw()
        })
        req.addEventListener("error", (err) =>
        {
            console.error(err)
        })
        req.open("GET", require("../../assets/clubs.csv"))
        req.send()
    },
}

export default Storage;