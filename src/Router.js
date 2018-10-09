import React from 'react';
import { Scene, Router } from 'react-native-router-flux'

import Page1Container from "./containers/Page1";
import Page2Container from "./containers/Page2";

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="Page1" component={Page1Container} title="Page 1" initial/>
                <Scene key="Page2" component={Page2Container} title="Page 2"/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;