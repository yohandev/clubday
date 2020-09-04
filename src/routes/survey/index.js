import m from "mithril" // this line is important! even if vscode detects this as dead code

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
                
            </div>
        </div>
    )
}

export default Survey;