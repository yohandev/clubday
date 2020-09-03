import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';

/**
 * main view
 */
const App: React.FC = () =>
(
    <HashRouter>
        <Route path="/" component={Home}/>
    </HashRouter>
);

export default App;