import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Notifications from './components/Notifications';

import MinecraftMap from './components/MinecraftMap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

import {
    RouteComponentProps,
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
interface RouterProps {
    component?: React.SFC<RouteComponentProps<any> | void> | React.ComponentClass<RouteComponentProps<any> | void>;
  }
const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Notifications/>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Content />
                    </Route>
                    <Route path="/mc-wiki">

                    </Route>
                    <Route path="/mc-map">
                        <MinecraftMap />
                    </Route>
                    <Route path="/mc-perks">
                        
                    </Route>
                    <Route path="/gta-wiki">
                        
                    </Route>
                    <Route path="/gta-forum">
                        
                    </Route>
                    <Route path="/gta-perks">
                        
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
