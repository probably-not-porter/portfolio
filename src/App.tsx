import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Notifications from './components/Notifications';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

const App: React.FC = () => {
    return (
        <div>
            <Notifications/>
            <Header />
            <Content />
        </div>
    );
};

export default App;
