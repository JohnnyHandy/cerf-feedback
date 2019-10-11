import React from 'react'
import './login.css'

const login =(props)=> {
    function handle(stage,login){
        props.setStage(stage)
        props.setLogin(login)
    }
    return(
        <div className='login-container'>
            <div className='title1'>{props.test ==='0'? 'Feedback Entre os Diretores': props.test==='1'? 'Feedback360':null}</div>
            <div className='title2'>
                <div className='loginTitle'>Login</div>
                <div className='arrow'><img src='https://i.imgur.com/Wj8GhmI.png' alt='back'/></div>
            </div>
            <div className='flex-container1'>
                <div className='fred' onClick={()=>handle(props.test ? '2':'0','Fred')}><img src='https://i.imgur.com/B7eASOZ.png' alt='fred'/></div>
                <div className='geraldo' onClick={()=>handle(props.test ? '2':'0','Geraldo')}><img src='https://i.imgur.com/YPEVOGu.png' alt='geraldo'/></div>
            </div>
            <div className='flex-container2'>
                <div className='izabel' onClick={()=>handle(props.test ? '2':'0','Izabel')}><img src ='https://i.imgur.com/a3tbUyJ.png' alt='izabel'/></div>
            </div>
            <div className='flex-container3'>
                <div className='pedro' onClick={()=>handle(props.test ? '2':'0','Pedro')}><img src='https://i.imgur.com/MIofgxK.png' alt='pedro'/></div>
                <div className='ramon' onClick={()=>handle(props.test ? '2':'0','Ramon')}><img src='https://i.imgur.com/nWNbSkX.png' alt='ramon'/></div>
            </div>
        </div>
    )
}

export default login