import React from 'react'
import './login.css'

const login =(props)=> {
    return(
        <div className='login-container'>
            <div className='title1'>Feedback Entre os Diretores</div>
            <div className='title2'>Login</div>
            <div class='flex-container1'>
                <div className='fred'><img src='https://i.imgur.com/B7eASOZ.png' alt='fred'/></div>
                <div className='geraldo'><img src='https://i.imgur.com/YPEVOGu.png' alt='geraldo'/></div>
            </div>
            <div className='flex-container2'>
                <div className='izabel'><img src ='https://i.imgur.com/a3tbUyJ.png' alt='izabel'/></div>
            </div>
            <div className='flex-container3'>
                <div className='pedro'><img src='https://i.imgur.com/MIofgxK.png' alt='pedro'/></div>
                <div className='ramon'><img src='https://i.imgur.com/nWNbSkX.png' alt='ramon'/></div>
            </div>
        </div>
    )
}

export default login