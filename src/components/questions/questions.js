import React from 'react'

import './questions.css'

const questions = (props)=>{
    return(
        <div className='questions-container'>
            <div className='flexbox-container'>
                <div className='login'><img src={props.userPic} alt={props.user}/></div>
                <div><img src='https://i.imgur.com/fULdqVv.png' alt='arrows'/></div>
                <div className='choice'><img src={props.choicePic} alt={props.choice}/></div>
            </div>
            <div className='title'>Dê seu feedback para Izabel! <br/> De 1 a 5, como você avalia {props.choice} no que diz respeito à:</div>
            <div className='theme'>Negociação</div>
            <div className='flexbox-container2'>
                <div className='first'>1</div>
                <div className='second'>2</div>
                <div className='third'>3</div>
                <div className='fourth'>4</div>
                <div className='fifth'>5</div>
            </div>
            
            
        </div>
    )
}

export default questions