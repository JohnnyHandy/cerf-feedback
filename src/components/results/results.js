import React, {useState} from 'react'
import axios from '../../axios'
import {Progress} from 'reactstrap'
import './results.css'
const Results = (props)=>{
    const [adaptabilidade,setAdaptabilidade] = useState(null)
    const [lideranca,setLideranca] = useState(null)
    const [comunicacao,setComunicacao] = useState(null)
    getData()
    function getData(){
        axios.get('/results/'+props.user+'.json').then(
            response=>{
                let adapt = 0
                let lid = 0
                let comunic = 0
                for(let i = 0; i < Object.keys(response.data).length; i++){
                    console.log(response.data[Object.keys(response.data)[i]])
                    adapt = adapt + response.data[Object.keys(response.data)[i]].adaptabilidade
                    lid = lid + response.data[Object.keys(response.data)[i]].lideranca
                    comunic = comunic + response.data[Object.keys(response.data)[i]].comunicacao
                }
                setAdaptabilidade((adapt/Object.keys(response.data).length).toFixed(1))
                setLideranca((lid/Object.keys(response.data).length).toFixed(1))
                setComunicacao((comunic/Object.keys(response.data).length).toFixed(2))
            }
        ).catch(error=>{console.log(error)})
    }
    console.log(adaptabilidade,comunicacao,lideranca)
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
                    <Progress color={lideranca < 2 ? 'danger': lideranca > 2 && lideranca < 3.5 ? 'warning' : 'success' } animated value={lideranca} max={5}/>
                </div>
                <div className='result'>
                    <div className='criteria'>Comunicação</div>
                    <Progress animated color={comunicacao < 2 ? 'danger': comunicacao > 2 && comunicacao < 3.5 ? 'warning' : 'success' } value={comunicacao} max={5}/>
                </div>
                <div className='result'>
                    <div className='criteria'>Adaptabilidade</div>
                    <Progress animated color={adaptabilidade < 2 ? 'danger': adaptabilidade > 2 && adaptabilidade < 3.5 ? 'warning' : 'success' } value={adaptabilidade} max={5}/>
                </div>
            </div>
            <button className='update' onClick={()=>getData()}> Atualizar Resultados </button>
        </div>
    )
}

export default Results