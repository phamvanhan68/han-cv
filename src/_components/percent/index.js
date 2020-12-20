import React from 'react'
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import './percent.css'

// Percent for ProgressBar
function Percent(props) {
    return(
        <div>
            <div className="slider-container">
                <Progress 
                    percent={props.percent} 
                    showInfo={false} 
                    trailColor = {'rgb(194, 192, 192)'}
                    strokeWidth = {10}
                    strokeColour = {'1890ff'}
                />
                <span className="tooltip">{"Experience level: "+props.percent + "%"}</span>
            </div>
            
        </div>
    )
}

export default Percent;