import m from "mithril" // this line is important! even if vscode detects this as dead code

import SurveyItem from "./item"
import Storage from "../../storage"
import Analytics from "../../analytics";

// TODO remove this hard-coded
const ClubKeywords =
[
    "Helping Others", 
    "Awareness", 
    "Outreach", 
    "Teamwork", 
    "Community", 
    "Health/Disabilities", 
    "STEM", 
    "Diversity", 
    "Education", 
    "Competition", 
    "Design", 
    "Art", 
    "Creative", 
    "Leisure", 
    "Music", 
    "Cultural", 
    "Public Speaking", 
    "Leadership", 
    "Food", 
    "Coding", 
    "Sports"
]

/**
 * whether or not the user discovered that you can scroll
 */
var scrolled = false;

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
            <a href="#!/clubs" onclick={ Survey.oncontinueclicked }>
                <button id="survey-button" class="heavy-button">continue</button>
            </a>

            <div id="survey-list" onscroll={ () => scrolled = true }>
                { ClubKeywords.map((key) => <SurveyItem keyword={ key } />) }
            </div>
        </div>
    ),
    oncontinueclicked: () =>
    {
        /* SCROLL CHECK */
        const e = document.getElementById('survey-list');

        if (!scrolled && e.scrollHeight > e.clientHeight)
        {
            if (!confirm("It appears you haven't scrolled down to see the complete list of keywords. Continue?"))
            {
                return false;
            }
        }

        /* SORT CLUBS */
        // assign likes
        Storage.order.forEach((club) =>
        {
            club.likes = 0;

            Storage.clubs[club.id].keywords.forEach((key, i) =>
            {
                if (Storage.likes[key])
                {
                    club.likes += i == 0 ? 2 : 1;
                }
            })
        })

        // sort by likes
        Storage.order = Storage.order.sort((a, b) => b.likes - a.likes)
        Storage.sorted = true;

        /* ANALYTICS */
        let l = [];
        for (let i in Storage.likes)
        {
            if (Storage.likes[i])
            {
                l.push(i)
            }
        }
        Analytics.report('selected_interests', { interests: l.toString() })

        return true;
    }
}

export default Survey;