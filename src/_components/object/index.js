import React from 'react'
import 'antd/dist/antd.css';
import HeadLine from './../object'
import { Avatar } from 'antd';
import './object.css'
import icon from "./../../images/logos/framgia_logo.png"
// Object Content Component
function ObjectComponent(props) {
    return (
        <div className = "object-component">
            <div className = "logo">
                <Avatar shape="square" size={64} src={props.icon} />
            </div>
            <div className = "detail">
                <div>
                    <h3 className = "title-description">{props.company}</h3>
                </div>
                <span className = "time-description">{props.time}</span>
                <p className = "role">{props.role}</p>
            </div>
        </div>
    )
}

export default ObjectComponent;