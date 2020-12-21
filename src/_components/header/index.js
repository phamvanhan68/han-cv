import React from 'react';
import './header.css'

function Header() {
    return (
        <div className = "main-header">
            <div className = "content-container">
                <div className="item-in-header">
                    <img className='icon-in-header' src={require('./../../images/icons/user.png')}/>
                    <h4>Pham Van Han</h4>
                </div>
                <div className="item-in-header">
                    <img className='icon-in-header' src={require('./../../images/icons/phone.png')}/>
                    <h4>0968011***</h4>
                </div>
                <div className="item-in-header">
                    <img className='icon-in-header' src={require('./../../images/icons/message.png')}/>
                    <h4>phamvanhan682@gmail.com</h4>
                </div>
                <div className="item-in-header">
                    <img className='icon-in-header' src={require('./../../images/icons/home.png')}/>
                    <h4>DaNang, 55000</h4>
                </div>
            </div>
        </div>
    )
}

export default Header;