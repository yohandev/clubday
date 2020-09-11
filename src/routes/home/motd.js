import m from "mithril" // this line is important! even if vscode detects this as dead code

/**
 * "Message of the day" component
 */
const Motd =
{
    view: (vnode) =>
    (
        <div id="motd">
            <h2>{ vnode.attrs.message }</h2>
            <h3>{ vnode.attrs.details }</h3>
        </div>
    )
}

export default Motd;