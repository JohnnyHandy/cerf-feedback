import React,{useState} from 'react'

import './questions.css'

const Questions = (props)=>{
    const test = ["Liderança","Comunicação","Adaptabilidade"]
    const [results,setResults]=useState({login:props.user,target:props.choice})
    const [question,setQuestion]=useState(0)
    async function setResult(grade){
        const copy = question === 0 ? {...results,lideranca:grade} : question === 1 ? {...results,comunicacao:grade} : question === 2 ? {...results,adaptabilidade:grade} :null
        await setResults(copy)
        await setQuestion(question+1)
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
                <div className='fourth'onClick={()=>setResults(4)}>4</div>
                <div className='fifth'onClick={()=>setResults(5)}>5</div>
            </div>:null}
             {question > 2 ?<div className='theme'>{props.user}, obrigado por dar seu feedback a {props.choice}! <br/> Deseja dar seu feedback a outro diretor?</div>:null}
            
            
        </div>
    )
}

export default Questions