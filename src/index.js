import m from "mithril"

import Home from "./routes/home"
import Survey from "./routes/survey"
import Clubs from "./routes/clubs"

const root = document.body

m.route(root, "/home",
{
    "/home": Home,
    "/survey": Survey,
    "/clubs": Clubs,
})