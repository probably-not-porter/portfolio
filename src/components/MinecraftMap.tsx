import React from 'react';
import Iframe from 'react-iframe';

import './../css/mc_map.css';

class MinecraftMap extends React.Component{
    
    render(){
        return (
            <Iframe url="https://51.81.80.168:8123/"
                width="100%"
                height="100%"
                id="myId"
                className="map"
                position="relative"/>
        );
    }
};

export default MinecraftMap;