import React from 'react';
import './headline.css'

import { CodepenOutlined } from '@ant-design/icons'
// Headline Title for each part
// Ex: ABOUT ME, EDUCATION, EXPERIENCES...
function HeadLine(props) {
    return (
        <div className = "main-headline">
            <div className = "icon-object">
                <CodepenOutlined />
            </div>
            <div className = "text-object">
                <h3 className = "title"> {props.name}</h3>
            </div>
        </div>
    )
}

export default HeadLine;