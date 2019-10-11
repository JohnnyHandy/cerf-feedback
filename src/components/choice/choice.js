import React from 'react'

import './choice.css'

const choice = (props)=>{
    function handle(stage,choice){
        props.setStage(stage)
        props.setChoice(choice)
    }
    
    let firstRow = props.data.map((i,index)=>{
        return index < 2 ? (<div key={index} className={ index===0 ?'choice-1' : index===1?'choice-2':null}  onClick={()=>handle('3',i.name)}><img src={i.url} alt={index===0?'First Choice':index==='1'?'Second Choice': 'alt text'}/></div>) : null
    })
    let secondRow = props.data.map((i,index)=>{
        return index < 4 && index >1? (<div key={index} className={ index===2 ?'choice-3' : index===3?'choice-4':null}  onClick={()=>handle('3',i.name)}><img src={i.url} alt={index===2?'Third Choice':index===3?'Fourth Choice' : 'alt text'}/></div>) : null

    })
    return(
        <div className='choice-container'>
            <div className='flexbox-container'>
                <div className='img'><img src={props.userPic} alt={props.user}/></div>
                <div className='arrow'><img src='https://i.imgur.com/Wj8GhmI.png' alt='back'/></div>
            </div>
            <div className='title'>
                {props.user}, seja bem vindo ao feedback entre os diretores! 
                <br/>
                Quem você deseja avaliar?
            </div>
            <div className='flexbox-container-2'>
                {firstRow}
            </div>
            <div className='flexbox-container-3'>
                {secondRow}
            </div>
        </div>
    )
}

export default choice