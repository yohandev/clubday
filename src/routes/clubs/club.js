import m from "mithril" // this line is important! even if vscode detects this as dead code

/**
 * single club item
 */
const Club =
{
    view: (vnode) =>
    (
        <div class="clubs-list-item">
            <h1> { vnode.attrs.name } </h1>

            <div class="clubs-list-item-tags-list">
                { vnode.attrs.keywords.map((keyword) => <div class="clubs-list-item-tags-list-item">{ keyword }</div>) }
            </div>

            <p> { vnode.attrs.description } </p>
        </div>
    )  
}

export default Club;