import React from 'react'
import './landing.css'

const landing = (props)=>{
  function handle(stage,test){
    props.setStage(stage)
    props.setTest(test)
  }
    return(
    <div className='options-container'>
        <div onClick={()=>handle('1','0')} className='option1'>
          Feedback entre os diretores
        </div>
        <div onClick={()=>handle('1','1')} className='option2'>
          Feedback360
        </div>
    </div>

    )
}

export default landing