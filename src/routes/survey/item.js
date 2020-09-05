import m from "mithril" // this line is important! even if vscode detects this as dead code

import DragIcon from "../../../assets/drag-indicator.svg"

/**
 * single keyword in the survey list of keywords
 */
const SurveyItem =
{
    view: (vnode) =>
    (
        <div class="survey-list-item">
            <img src={ DragIcon } class="survey-list-drag-icon" />
            
            { vnode.attrs.keyword }
        </div>
    )
}

export default SurveyItem;