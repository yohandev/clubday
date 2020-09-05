import m from "mithril" // this line is important! even if vscode detects this as dead code
import Sortable from "sortablejs"

import SurveyItem from "./item"

// TODO remove this hard-coded
const ClubKeywords =
[
    "helping others",
    "awareness",
    "outreach",
    "teamwork",
    "community",
    "disabilities",
    "STEM",
    "diversity",
    "education",
    "competition",
    "design",
    "art"
]

/**
 * survey route
 */
const Survey =
{
    view: () =>
    (
        <div id="survey-body">
            <h1 id="survey-title" class="title">select your &nbsp;<span data-text="interests" class="title-reversed">interests</span>&nbsp;...</h1>
            <button>continue</button>

            <div id="survey-list">
                { ClubKeywords.map((key) => <SurveyItem keyword={ key } />) }
            </div>
        </div>
    ),
    oncreate: () =>
    {
        Sortable.create(document.getElementById("survey-list"),
        {
            sort: true,
            animation: 100,
        })
    }
}

export default Survey;