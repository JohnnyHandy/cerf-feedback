import React from 'react'
import {Progress} from 'reactstrap'
import './results.css'
const results = (props)=>{
    return(
        <div className='results-container'>
            <div className='flexbox-container'>
                <div className='img'><img src={props.userPic} alt={props.user}/></div>
            </div>
            <div className='title'>
                Confira aqui o resultado dos feedbacks dados à você!
            </div>
            <div className='flexbox-container-2'>
                <div className='result'>
                    <div className='criteria'>Liderança</div>
                    <Progress animated value={50}/>
                </div>
                <div className='result'>
                    <div className='criteria'>Comunicação</div>
                    <Progress animated value={50}/>
                </div>
                <div className='result'>
                    <div className='criteria'>Adaptabilidade</div>
                    <Progress animated value={50}/>
                </div>
            </div>
            <div className='update'> Atualizar Resultados </div>
        </div>
    )
}

export default results