import React, {useState} from 'react'
import axios from '../../axios'
import {Progress,Collapse} from 'reactstrap'
import './results.css'
const Results = (props)=>{
    const [firstLoad,setFirstLoad] = useState(true)
    const [adaptabilidade,setAdaptabilidade] = useState(null)
    const [adaptComment,setAdaptComment] = useState([])
    const [lideranca,setLideranca] = useState(null)
    const [lidComment,setLidComment] = useState([])
    const [comunicacao,setComunicacao] = useState(null)
    const [comuComment,setComuComment] = useState([])
    const [lidCollapse,setLidCollapse] = useState(false)
    const [adaptCollapse,setAdaptCollapse] = useState(false)
    const [comuCollapse,setComuCollapse] = useState(false)
    function firstLoadFunction(){
        if(firstLoad===true){
            getData()
            setFirstLoad(null)
        }else{
            return null
        }
    }
    firstLoadFunction()
    function getData(){
        axios.get('/results/'+props.user+'.json').then(
            response=>{
                console.log(response)
                let adapt = 0
                let adaptComment = []
                let lid = 0
                let lidComment = []
                let comunic = 0
                let comuComment =[]
                for(let i = 0; i < Object.keys(response.data).length; i++){
                    adapt = adapt + response.data[Object.keys(response.data)[i]].adaptabilidade
                    adaptComment.push(response.data[Object.keys(response.data)[i]].adaptComment) 
                    lid = lid + response.data[Object.keys(response.data)[i]].lideranca
                    lidComment.push(response.data[Object.keys(response.data)[i]].lidComment) 
                    comunic = comunic + response.data[Object.keys(response.data)[i]].comunicacao
                    comuComment.push(response.data[Object.keys(response.data)[i]].comuComment) 
                }
                setAdaptabilidade((adapt/Object.keys(response.data).length).toFixed(1))
                setAdaptComment(adaptComment)
                setLideranca((lid/Object.keys(response.data).length).toFixed(1))
                setLidComment(lidComment)
                setComunicacao((comunic/Object.keys(response.data).length).toFixed(2))
                setComuComment(comuComment)
            }
        ).catch(error=>{console.log(error)})
    }
    const adaptCommentElement = adaptComment.map((i,index)=>{
        return (
            <p key={index}>{i}</p>
        )
    }) 
    const lidCommentElement = lidComment.map((i,index)=>{
        return (
            <p key={index}>{i}</p>
        )
    }) 
    const comuCommentElement = comuComment.map((i,index)=>{
        return (
            <p key={index}>{i}</p>
        )
    })
    console.log('liderança: '+lideranca,'comunicação: '+comunicacao,'adaptabilidade: '+adaptabilidade) 
    return(
        <div className='results-container'>
            <div className='flexbox-container'>
                <div className='img'><img src={props.userPic} alt={props.user}/></div>
            </div>
            <div className='title'>
                Confira aqui o resultado dos feedbacks dados à você!
            </div>
           <div className='flexbox-container-2'>
           {comuCollapse || adaptCollapse ? null : 
           <div className='result'>
                    <div onClick={()=>setLidCollapse(!lidCollapse)} className='criteria'>Liderança <img src={lidCollapse?'https://i.imgur.com/NT8slih.png':'https://i.imgur.com/SJZhLOg.png'} alt='collapse'/></div>
                    <Collapse isOpen={lidCollapse}>
                    {lideranca ? <Progress color={lideranca < 2 ? 'danger': (lideranca > 2 && lideranca) < 3.5 ? 'warning' : lideranca > 3.5 ? 'success':null } animated value={lideranca} max={5}/>:null}
                        <h5>{lidComment.length ? 'Comentários':'Não há comentários no momento!'}</h5>
                        {lidCommentElement}
                    </Collapse>
            </div>}
            { lidCollapse || adaptCollapse ? null: 
            <div className='result'>
                    <div onClick={()=>setComuCollapse(!comuCollapse)} className='criteria'>Comunicação <img src={comuCollapse?'https://i.imgur.com/NT8slih.png':'https://i.imgur.com/SJZhLOg.png'} alt='collapse'/></div>
                    <Collapse isOpen={comuCollapse}>
                    {comunicacao ? <Progress animated color={comunicacao < 2 ? 'danger': (comunicacao > 2 && comunicacao) < 3.5 ? 'warning' : 'success' } value={comunicacao}  max={5}/>:null}
                        <h5>{comuComment.length?'Comentários':'Não há comentários no momento!'}</h5>
                        {comuCommentElement}
                    </Collapse>
            </div>
        }
           { lidCollapse || comuCollapse ? null : 
           <div className='result'>
                    <div onClick={()=>setAdaptCollapse(!adaptCollapse)} className='criteria'>Adaptabilidade <img src={adaptCollapse?'https://i.imgur.com/NT8slih.png':'https://i.imgur.com/SJZhLOg.png'} alt='collapse'/></div>
                    <Collapse isOpen={adaptCollapse}>
                    {adaptabilidade ? <Progress animated color={adaptabilidade < 2 ? 'danger': adaptabilidade > 2 && adaptabilidade < 3.5 ? 'warning' : 'success' } value={adaptabilidade}  max={5}/>:null}

                        <h5>{adaptComment.length ? 'Comentários':'Não há comentários no momento!'}</h5>
                        {adaptCommentElement}
                    </Collapse>
             </div>
            }
            </div>
            <button className='update' onClick={()=>getData()}> Atualizar Resultados </button>
            <button className='update' onClick={()=>{
                adaptCollapse ? setAdaptCollapse(!adaptCollapse) : comuCollapse ? setComuCollapse(!comuCollapse) : lidCollapse?setLidCollapse(!lidCollapse) : 
                props.setStage('0')
                }}> Voltar </button>
        </div>
    )
}

export default Results