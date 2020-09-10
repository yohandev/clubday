/**
 * fixes the website for mobile
 * 
 * credits: https://stackoverflow.com/questions/23885255/how-to-remove-ignore-hover-css-style-on-touch-devices
 */
const Mobile =
{
    hastouch: () => ('ontouchstart' in document.documentElement
                        || navigator.maxTouchPoints > 0
                        || navigator.msMaxTouchPoints > 0),
    /**
     * remove all the :hover stylesheets
     */
    setup: () =>
    {
        if (Mobile.hastouch())
        {
            try // prevent exception on browsers not supporting DOM styleSheets properly
            {
                for (var si in document.styleSheets)
                {
                    var styleSheet = document.styleSheets[si];
                    if (!styleSheet.rules)
                    {
                        continue;
                    }
        
                    for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--)
                    {
                        if (!styleSheet.rules[ri].selectorText)
                        {
                            continue;
                        }
        
                        if (styleSheet.rules[ri].selectorText.match(':hover'))
                        {
                            styleSheet.deleteRule(ri);
                        }
                    }
                }
            }
            catch (ex) {}
        }
    }
}

export default Mobile;