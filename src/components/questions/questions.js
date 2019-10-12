import React,{useState} from 'react'
import axios from '../../axios'

import './questions.css'

const Questions = (props)=>{
    const initialObject = {login:props.user,target:props.choice}
    const test = ["Liderança","Comunicação","Adaptabilidade"]
    const [selected,setSelected] = useState(null)
    const [comment,setComment] = useState('')
    const [results,setResults]=useState(initialObject)
    const [question,setQuestion]=useState(0)
    async function setResult(grade,comment){
        console.log('[setResult]',grade)
        const copy = question === 0 ? {...results,lideranca:grade,lidComment:comment} : question === 1 ? {...results,comunicacao:grade,comuComment:comment} : question === 2 ? {...results,adaptabilidade:grade,adaptComment:comment} :null
        console.log(copy)
        await setResults(copy)
        await setComment('')
        await setSelected(null)
        await setQuestion(question+1)
    }
    function back(){
        if(question > 0 && question < 3)
       {
        setQuestion(question-1);
        setSelected(null)
        setComment('')
        }else if(question === 0 || question === 3){
            props.setStage('2')
        }
    }
    function commentValue(e){
        setComment(e.target.value)
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
            {question <= 2 ?<div className='title'>De 1 a 5, como você avalia {props.choice} no que diz respeito à:</div> : null}
            {question <= 2 ?<div className='theme'>{test[question]}</div>:null}
            {question <= 2 ? 
            <div className='flexbox-container-2'>
                <div className='options'>
                <button className={selected === 1 ? 'first-selected':'first'} onClick={()=>setSelected(1)}>1</button>
                <button className={selected === 2 ? 'second-selected':'second'} onClick={()=>setSelected(2)}>2</button>
                <button className={selected === 3 ? 'third-selected':'third'} onClick={()=>setSelected(3)}>3</button>
                <button className={selected === 4 ? 'fourth-selected':'fourth'} onClick={()=>setSelected(4)}>4</button>
                <button className={selected === 5 ? 'fifth-selected':'fifth'} onClick={()=>setSelected(5)}>5</button>
                </div>
                <div className='comment'>Faça um comentário sobre a sua nota</div>
                <div className='commentArea'><input onChange={(e)=>commentValue(e)} value={comment} style={{width:'100%',height:'60px'}} type='textarea'/></div>
                <div className='proceed'>
                    <button className='back' onClick = {()=>back()}>Voltar</button>
                    <button disabled={selected ? false : true} className='advance' onClick={()=>setResult(selected,comment)}>Avançar</button>
                </div>     
            </div>
            :null}
            {question === 3 ? 
            <div className='conclusion'>
                <div>Estas foram as suas notas para {props.choice}:</div>
                <div>Liderança:{results.lideranca}</div>
                <div>Comunicação:{results.comunicacao}</div>
                <div>Adaptabilidade:{results.adaptabilidade}</div>
                <button className='restart' onClick={()=>restart()}> Reiniciar Feedback </button>
                <button className='send' onClick={()=>postRequest()}> Enviar Feedback</button>
                <button className='back' onClick = {()=>back()}>Cancelar Feedback</button>
            </div>
            : null}
            {question > 3 ?
                <div className='next'>
                    <div>
                        {props.user}, obrigado por dar seu feedback a {props.choice}! <br/> Deseja dar seu feedback a outro diretor?
                    </div>  
                    <div className='continue' onClick={()=>props.setStage('2')}>Sim</div>
                    <div className='continue' onClick={()=>props.setStage('0')}>Não</div>
                    
              
                </div>
                :
            null}
        </div>
    )
}

export default Questions