import * as React from 'react';

interface Props
{
   name: string
}

export default class App extends React.Component<Props>
{
    render()
    {
        const { name } = this.props;

        return (
            <>
                <h1>
                Hello {name}
                </h1>
            </>
        );
    }
}