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
                <div class="survey-list-item">Move</div>
                <div class="survey-list-item">Or drag</div>
                <div class="survey-list-item">Each of the items</div>
                <div class="survey-list-item">To different positions</div>
                <div class="survey-list-item">Move</div>
                <div class="survey-list-item">Or drag</div>
                <div class="survey-list-item">Each of the items</div>
                <div class="survey-list-item">To different positions</div>
                <div class="survey-list-item">Move</div>
                <div class="survey-list-item">Or drag</div>
                <div class="survey-list-item">Each of the items</div>
                <div class="survey-list-item">To different positions</div>
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