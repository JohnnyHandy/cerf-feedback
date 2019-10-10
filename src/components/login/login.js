import React from 'react'
import './login.css'

const login =(props)=> {
    function handle(stage,login){
        props.setStage(stage)
        props.setLogin(login)
    }
    return(
        <div className='login-container'>
            <div className='title1'>Feedback Entre os Diretores</div>
            <div className='title2'>Login</div>
            <div className='flex-container1'>
                <div className='fred' onClick={()=>handle('2','Fred')}><img src='https://i.imgur.com/B7eASOZ.png' alt='fred'/></div>
                <div className='geraldo' onClick={()=>handle('2','Geraldo')}><img src='https://i.imgur.com/YPEVOGu.png' alt='geraldo'/></div>
            </div>
            <div className='flex-container2'>
                <div className='izabel' onClick={()=>handle('2','Izabel')}><img src ='https://i.imgur.com/a3tbUyJ.png' alt='izabel'/></div>
            </div>
            <div className='flex-container3'>
                <div className='pedro' onClick={()=>handle('2','Pedro')}><img src='https://i.imgur.com/MIofgxK.png' alt='pedro'/></div>
                <div className='ramon' onClick={()=>handle('2','Ramon')}><img src='https://i.imgur.com/nWNbSkX.png' alt='ramon'/></div>
            </div>
        </div>
    )
}

export default login