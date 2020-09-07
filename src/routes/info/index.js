import m from "mithril" // this line is important! even if vscode detects this as dead code

/**
 * club info page
 */
const ClubInfo =
{
    view: (vnode) =>
    (
        <div>
            { vnode.attrs.id }
        </div>
    )
}

export default ClubInfo;