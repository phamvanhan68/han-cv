import React, { Component } from 'react'
import icon from "./../../images/logos/framgia_logo.png"
import { Timeline, TimelineEvent } from "react-event-timeline";
import './right-component.css'
import CustomTimeLineEvent from './../timeline-event'

function RightComponent() {
    return (
        <div>
            <Timeline>
                <CustomTimeLineEvent
                    title = "INQUIRER DAILY NEWS - CHECK USER INFO"
                    subtitle = "Team size: 1 - Role: Developer"
                    createdAt = "December 2019"   
                    icon = {require('./../../images/logos/nodejs_logo.png')}
                    description = "Build a RESTful API server to check and change user information. It was developed on NodeJS!"
                    state = "Done"
                />

                <CustomTimeLineEvent
                    title = "INQUIRER DAILY NEWS - ETL DATA"
                    subtitle = "Team size: 1 - Role: Developer"
                    createdAt = "December 2019"
                    icon = {require('./../../images/logos/python_logo.png')}
                    description = "Build process to replicate the data from various sources into data warehouse!"
                    state = "Progressing"
                />

                <CustomTimeLineEvent
                    title = "RAINY DAYS"
                    subtitle = "Team size: 1 - Role: Developer"
                    createdAt = "August 2020 - September 2020 "
                    icon = {require('./../../images/logos/react_logo.png')}
                    description = "Build a web application for the rain sounds. I used NodeJs for Back-end and ReactJs for Front-end."
                    state = "Done"
                />

                <CustomTimeLineEvent
                    title = "CHATBOT"
                    subtitle = "Team size: 1 - Role: Developer"
                    createdAt = "October 2020"   
                    icon = {require('./../../images/logos/nodejs_logo.png')}
                    description = "Build a RESTful API server Chatbot. It was developed on NodeJS!"
                    state = "Progressing"
                />

                <CustomTimeLineEvent
                    title = "MACHINE LEARNING - STOCK FORECASTING"
                    subtitle = "Team size: 1 - Role: Developer"
                    createdAt = "October 2020"   
                    icon = {require('./../../images/logos/nodejs_logo.png')}
                    description = "Build a ML to forecast the stock's price. Email notification when stock gets too low or high."
                    state = "Progressing"
                />


                <TimelineEvent
                    icon={<i>Now</i>}
                >

                </TimelineEvent>
            </Timeline>
        </div>
    )
}

export default RightComponent;