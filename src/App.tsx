import * as React from 'react';
import Styles from './styles';

interface Props
{
    name: string
}

interface State
{
    /** fraction between left and right half of the app, 0.0-1.0 */
    frac: number
}

export default class App extends React.Component<Props, State>
{
    constructor(props: Readonly<Props>)
    {
        super(props);

        this.state = { frac: 0.5 };
    }

    render()
    {
        const { name } = this.props;
        const { frac } = this.state;

        return (
            <>
                <div className="left" style={Styles.LEFT(frac)}>
                    <h1>
                    Hello {name} from the left!
                    </h1>
                </div>
                <div className="right" style={Styles.RIGHT(frac)}>
                    <h1>
                    I'm on the right!
                    </h1>
                </div>
            </>
        );
    }
}