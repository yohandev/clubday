import m from "mithril" // this line is important! even if vscode detects this as dead code

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
            <h1 id="survey-title" class="title">select your &nbsp;<span data-text="interests" class="title-reversed">interests</span></h1>

            <h1 id="survey-subtitle" class="title">(scroll down to see all keywords)</h1>
            <h1 id="survey-footer" class="title">...then, press</h1>
            <a href="#!/clubs">
                <button id="survey-button" class="heavy-button">continue</button>
            </a>

            <div id="survey-list">
                { ClubKeywords.map((key) => <SurveyItem keyword={ key } />) }
            </div>
        </div>
    ),
}

export default Survey;