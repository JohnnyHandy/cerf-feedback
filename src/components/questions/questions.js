import React,{useState} from 'react'
import axios from '../../axios'

import './questions.css'

const Questions = (props)=>{
    const initialObject = {login:props.user,target:props.choice}
    const test = ["Liderança","Comunicação","Adaptabilidade"]
    const [results,setResults]=useState(initialObject)
    const [question,setQuestion]=useState(0)
    async function setResult(grade){
        console.log('[setResult]',grade)
        const copy = question === 0 ? {...results,lideranca:grade} : question === 1 ? {...results,comunicacao:grade} : question === 2 ? {...results,adaptabilidade:grade} :null
        await setResults(copy)
        await setQuestion(question+1)
    }
    function restart(){
        setQuestion(0)
        setResults(initialObject)
    }
    function postRequest(){
        setQuestion(question+1)
        axios.post('/results/'+props.choice+'.json',results).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }
    return(
        <div className='questions-container'>
            <div className='flexbox-container'>
                <div className='login'><img src={props.userPic} alt={props.user}/></div>
                <div><img src='https://i.imgur.com/fULdqVv.png' alt='arrows'/></div>
                <div className='choice'><img src={props.choicePic} alt={props.choice}/></div>
            </div>
            {question <= 2 ?<div className='title'>Dê seu feedback para {props.choice}! <br/> De 1 a 5, como você avalia {props.choice} no que diz respeito à:</div> : null}
            {question <= 2 ?<div className='theme'>{test[question]}</div>:null}
            {question <= 2 ? <div className='flexbox-container2'>
                <div className='first' onClick={()=>setResult(1)}>1</div>
                <div className='second'onClick={()=>setResult(2)}>2</div>
                <div className='third' onClick={()=>setResult(3)}>3</div>
                <div className='fourth'onClick={()=>setResult(4)}>4</div>
                <div className='fifth'onClick={()=>setResult(5)}>5</div>
            </div>:null}
            {question === 3 ? 
            <div className='conclusion'>
                <div>Estas foram as suas notas para {props.choice}:</div>
                <div>Liderança:{results.lideranca}</div>
                <div>Comunicação:{results.comunicacao}</div>
                <div>Adaptabilidade:{results.adaptabilidade}</div>
                <div className='restart' onClick={()=>restart()}> Reiniciar Feedback </div>
                <div className='send' onClick={()=>postRequest()}> Enviar Feedback</div>
            </div>
            : null}
            {question > 3 ?
                <div className='next'>
                    <div>
                        {props.user}, obrigado por dar seu feedback a {props.choice}! <br/> Deseja dar seu feedback a outro diretor?
                    </div>  
                    <div className='continue' onClick={()=>props.setStage('2')}>Sim </div>
                    <div className='continue' onClick={()=>props.setStage('0')}> Não</div>
              
                </div>
                :
            null}
        </div>
    )
}

export default Questions