import React,{useState,useEffect} from 'react';
import './App.css';
import Landing from './components/landing/landing'
import Login from './components/login/login'
import Choice from './components/choice/choice'
import Questions from './components/questions/questions'

function App() {
  const [stage,setStage] = useState('0')
  const [test,setTest] = useState(null)
  const [login,setLogin] = useState(null)
  const component = stage == '0' ? <Landing 
    setStage={(stage)=>setStage(stage)} 
    setTest={(test)=>setTest(test)}/> :
  stage =='1' ? <Login 
    setStage={(stage)=>setStage(stage)}
    setLogin={(login=>setLogin(login))}/> :
  stage =='2' ? <Choice/> :
  stage =='3' ? <Questions/> :
  null 
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://i.imgur.com/gQC4wPM.png' className="App-logo" alt="logo" />
        <div className='title'>Sistema de Feedback Interno</div>
        {component}
      </header>
      
    </div>
  );
}

export default App;
