import React, { useState } from 'react'

import './../css/credits.css';

class Credits extends React.Component{
    render(){
        return (
            <div className="credits">
                <span>Website by <a href="http://www.porterlibby.com/">Porter Libby</a></span>
            </div>
        );
    }
};

export default Credits;