import React from 'react'
import './landing.css'

const landing = (props)=>{
    return(
    <div className='options-container'>
        <div onClick={()=>props.setTest('1')} className='option1'>
          Feedback entre os diretores
        </div>
        <div onClick={()=>props.setTest('2')} className='option2'>
          Feedback360
        </div>
    </div>

    )
}

export default landing