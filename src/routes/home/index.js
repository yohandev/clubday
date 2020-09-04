import m from "mithril" // this line is important! even if vscode detects this as dead code

/**
 * home route
 */
const Home =
{
    view: () =>
    (
        <div id="home-body">
            <h1 id="home-logo">lahs club day</h1>
            <a href="#!/survey">
                <button id="home-button">Start</button>
            </a>
        </div>
    )
}

export default Home;