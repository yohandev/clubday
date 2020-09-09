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
                {
                    vnode.attrs.lacoin ?
                    <a href="https://docs.google.com/document/d/1SBuS_xbCK1BCOG-dEDVL0K8V8492HG_F564zkjOFu3Y/edit" target="_blank" style="text-decoration: none; color: inherit">
                        <div class="clubs-list-item-tags-list-item tooltip">
                            LACoin&nbsp;
                            <i class="fa fa-info-circle"></i>
                            <span class="tooltiptext">This club supports LACoin. <span class="pseudo-link">Learn more</span></span>
                        </div>
                    </a>
                    : undefined
                }
            </div>

            <p> { vnode.attrs.description }</p>
        </div>
    )  
}

export default Club;