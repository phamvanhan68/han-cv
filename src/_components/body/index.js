import React from 'react';
import LeftComponent from './../left-component'
import RightComponent from './../right-component'
import './body.css'

// Contains all body elements (left and right parts)
function Body() {
    return (
        <div className = "main-body">
            <div className = "col-5 left-container"> 
                <LeftComponent/>
            </div>
            <div className = "col-7 right-container"> 
                <RightComponent/>
            </div>
        </div>
    )
}

export default Body;