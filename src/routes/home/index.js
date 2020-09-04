import m from "mithril" // this line is important! even if vscode detects this as dead code

/**
 * home route
 */
const Home =
{
    view: () =>
    (
        <div id="home-body">
            <h1 id="home-logo">los altos <span data-text="club" id="home-logo-club">club</span> day</h1>
            <a href="#!/survey">
                <button id="home-button" class="heavy-button">start</button>
            </a>
        </div>
    )
}

var buttonTimer = 0;

export default Home;