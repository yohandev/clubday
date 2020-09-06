import m from "mithril" // this line is important! even if vscode detects this as dead code

/**
 * single club item
 */
const Club =
{
    view: (vnode) =>
    (
        <div class="club-parent">
            <h1> { vnode.attrs.name } </h1>
            <p> { vnode.attrs.description } </p>
        </div>
    )  
}

export default Club;