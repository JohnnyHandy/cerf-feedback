import React from 'react'
import './landing.css'

const landing = (props)=>{
  function handle(stage,test){
    props.setStage(stage)
    props.setTest(test)
  }
    return(
    <div className='options-container'>
        <button onClick={()=>handle(props.login ? '2':'1','0')} className='option1'>
          Feedback entre os diretores
        </button>
        <button onClick={()=>handle(props.login ? '2':'1','1')} className='option2'>
          Feedback360
        </button>
    </div>

    )
}

export default landing