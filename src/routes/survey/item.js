import m from "mithril" // this line is important! even if vscode detects this as dead code

import DragIcon from "../../../assets/drag-indicator.svg"

/**
 * single keyword in the survey list of keywords
 */
const SurveyItem =
{
    view: (vnode) =>
    (
        <div class="survey-list-item tooltip">
            <img src={ DragIcon } class="survey-list-drag-icon" />
            
            { vnode.attrs.keyword }

            <span class="tooltiptext">Tooltip text</span>
        </div>
    )
}

export default SurveyItem;