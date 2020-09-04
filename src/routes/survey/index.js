import m from "mithril" // this line is important! even if vscode detects this as dead code
import Sortable from "sortablejs"

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
                <ul id="survey-list-table">
                    <li>Move</li>
                    <li>Or drag</li>
                    <li>Each of the items</li>
                    <li>To different positions</li>
                </ul>
            </div>
        </div>
    ),
    oncreate: () =>
    {
        Sortable.create(document.getElementById("survey-list-table"))
    }
}

export default Survey;