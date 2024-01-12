import React from 'react'
import icon from './img-main-logo.png'

function HeaderComponent() {
  return (
    <div>
        <div className='div-main'>
            <div className='div-logo'>
                <img src={icon} alt='img-main-logo'/>
            </div>
            <div className='div-menu'>
                <div className='div-inner-menu'>
                    <p>HOME</p>
                    <div className='div-line'></div>
                    <p>CANDIDATE</p>
                    <div className='div-line'></div>
                    <p>WHAT WE DO</p>
                    <div className='div-line'></div>
                    <p>CLIENTS</p>
                    <div className='div-line'></div>
                    <p>BLOGS</p>
                    <div className='div-line'></div>
                    <p>CONTACT</p>
                </div>
            </div>
            <div className='div-buttons'>
                <div className='div-inner-button'>
                    <div className='div-icon-login'></div>
                    <div><p>LOG IN</p></div>
                </div>
                <div className='div-inner-button'>
                    <div className='div-icon-login'></div>
                    <div><p>REGISTER</p></div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default HeaderComponent