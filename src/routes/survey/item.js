import m from "mithril" // this line is important! even if vscode detects this as dead code
import Storage from "../../storage";

/**
 * single keyword in the survey list of keywords
 */
const SurveyItem =
{
    view: (vnode) =>
    (
        <div class="survey-list-item" onclick={ () => Storage.likes[vnode.attrs.keyword] = !Storage.likes[vnode.attrs.keyword]}>
            <svg
                fill={ Storage.likes[vnode.attrs.keyword] ? "var(--heart-colour)" : "var(--highlight-colour)" }
                stroke={ Storage.likes[vnode.attrs.keyword] ? "var(--heart-colour)" : "#E2E2E2" }
                stroke-width="3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24px"
                height="24px"
                class="survey-list-drag-icon"
            >
                <path class="heart-icon" d="M 15 7 C 8.9424416 7 4 11.942442 4 18 C 4 22.096154 7.0876448 25.952899 10.851562 29.908203 C 14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547 C 28.751621 37.869472 33.384518 33.863507 37.148438 29.908203 C 40.912356 25.952899 44 22.096154 44 18 C 44 11.942442 39.057558 7 33 7 C 29.523564 7 26.496821 8.8664883 24 12.037109 C 21.503179 8.8664883 18.476436 7 15 7 z"/>
            </svg>
            { vnode.attrs.keyword }
        </div>
    )
}

export default SurveyItem;