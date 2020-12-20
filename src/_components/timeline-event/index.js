import React, { Component } from 'react'
import {TimelineEvent } from "react-event-timeline";
import './timeline-event.css'

function CustomTimeLineEvent(props) {
    return (
        <div className="event-time-container">
            <TimelineEvent
                title= {props.title}
                titleStyle = {{ fontSize: "15px", fontWeight: "bold", fontFamily: "serif"}}
                subtitle = {props.subtitle}
                subtitleStyle = {{ fontSize: "12px"}}
                createdAt={props.createdAt}
                iconStyle = {{background: "transparent"}}
                bubbleStyle = {{border: '2px solid rgb(160, 178, 184)'}}
                icon={<img src={props.icon}/>}
            >
                <p> {props.description} </p>
            </TimelineEvent>
            <div className="state">
                <p>State: {props.state}</p>
            </div>
        </div>
    )
}

export default CustomTimeLineEvent;