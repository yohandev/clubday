import m from "mithril"

import Home from "./routes/home"
import Survey from "./routes/survey"
import Clubs from "./routes/clubs"
import ClubInfo from "./routes/info"
import Storage from "./storage"
import Mobile from "./utils/mobile"
import Analytics from "./analytics"

const root = document.body

// first, fetch data
Storage.fetch()

// fix a few touch-device glitches
Mobile.setup()

// set-up analytics
Analytics.init()

// then, render
m.route(root, "/home",
{
    "/home": Home,
    // "/survey": Survey,
    // "/clubs": Clubs,
    // "/club/:id": ClubInfo,
})