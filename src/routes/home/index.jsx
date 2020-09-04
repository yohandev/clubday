import m from "mithril" // this line is important! even if vscode detects this as dead code

/**
 * home route
 */
const Home =
{
    view: () =>
    (
        <div>
            <h1 class="title">LAHS Club Day 2020</h1>
            <a href="#!/survey">
                <button>Start</button>
            </a>
        </div>
    )
}

export default Home;