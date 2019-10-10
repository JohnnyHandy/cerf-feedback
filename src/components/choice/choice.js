import React from 'react'

import './choice.css'

const choice = (props)=>{
    return(
        <div className='choice-container'>
            <div className='flexbox-container'>
                <div className='img'><img src='https://i.imgur.com/B7eASOZ.png' alt='fred'/></div>
            </div>
            <div className='title'>
                Fred, seja bem vindo ao feedback entre os diretores! 
                <br/>
                Quem você deseja avaliar?
            </div>
            <div className='flexbox-container2'>
                <div className='geraldo'><img src='https://i.imgur.com/YPEVOGu.png' alt='geraldo'/></div>
                <div className='izabel'><img src='https://i.imgur.com/a3tbUyJ.png' alt='izabel'/></div>
            </div>
            <div className='flexbox-container3'>
                <div className='pedro'><img src='https://i.imgur.com/MIofgxK.png' alt='fred'/></div>
                <div className='ramon'><img src='https://i.imgur.com/nWNbSkX.png' alt='ramon'/></div>
            </div>
        </div>
    )
}

export default choice