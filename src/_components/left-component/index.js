import React from 'react'
import ObjectComponent from './../object'
import HeadLine from './../headline'
import AboutMe from './../about-me'
import Percent from './../percent'

function LeftComponent(props) {
    return (
        <div className = "left-component">
            <HeadLine name = "About me"/>
            <AboutMe/>

            <HeadLine name = "Education"/>
            <ObjectComponent 
                icon= {require('./../../images/logos/duytan_logo.png')}
                company='Duy Tan University'
                time='July 2014 - Dec 2018'
                role='Software Engineering'
            >
            </ObjectComponent>

            <HeadLine name = "Experiences"/>
            <ObjectComponent 
                icon= {require('./../../images/logos/enclave_logo.png')}
                company='Enclave'
                time='November 2018 - Now'
                role='Python - NodeJs - ReactJs'
            >
            </ObjectComponent>
            <ObjectComponent 
                icon= {require('./../../images/logos/inquirer_logo.png')}
                company='Inquirer'
                time='May 2019 - Now'
                role='Python - NodeJs'
            >
            </ObjectComponent>

            <HeadLine name = "Skill Summary"/>
            <ObjectComponent 
                icon= {require('./../../images/logos/python_logo_large.jpg')}
                company='Python'
                role="I have 2 years experiences on Python. I used Python to build RESTful API, ETL data, Machine Learning, ChatBot, Serverless..."
                time='Junior Developer'
            >
            </ObjectComponent>
            <Percent percent = {78}/>

            <ObjectComponent 
                icon= {require('./../../images/logos/nodejs_logo_large.png')}
                company='Node JS'
                role="I have 6 months working with NodeJS and went through 2 projects. This is my favorate language."
                time='Junior Developer'
            >
            </ObjectComponent>
            <Percent percent = {55}/>
            <ObjectComponent 
                icon= {require('./../../images/logos/reactjs_logo_large.png')}
                company='React JS'
                role="I'm self-learning in this language. Basically, I already built 2 web applications by ReactJs and also have knowledge about Redux, Redux-thunk, Redux-saga."
                time='Fresher Developer'
            >
            </ObjectComponent>
            <Percent percent = {40}/>
        </div>
    )
}

export default LeftComponent;