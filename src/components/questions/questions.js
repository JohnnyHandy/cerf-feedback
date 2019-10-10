import React from 'react'

import './questions.css'

const questions = ()=>{
    return(
        <div className='questions-container'>
            <div className='flexbox-container'>
                <div className='fred'><img src='https://i.imgur.com/B7eASOZ.png' alt='fred'/></div>
                <div><img src='https://i.imgur.com/fULdqVv.png' alt='arrows'/></div>
                <div className='izabel'><img src='https://i.imgur.com/a3tbUyJ.png' alt='izabel'/></div>
            </div>
            <div className='title'>Dê seu feedback para Izabel! <br/> De 1 a 5, como você avalia Izabel no que diz respeito à:</div>
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