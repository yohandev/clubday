import m from "mithril" // this line is important! even if vscode detects this as dead code
import Sortable from "sortablejs"

import DragIcon from "../../../assets/drag-indicator.svg"

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
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    
                    helping others
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    awareness
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    outreach
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    teamwork
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    community
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    disabilities
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    STEM
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    diversity
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    education
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    competition
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    design
                </div>
                <div class="survey-list-item">
                    <img src={ DragIcon } class="survey-list-drag-icon" />
                    art
                </div>
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