import React,{useState,useEffect} from 'react';
import './App.css';
import Landing from './components/landing/landing'
import Login from './components/login/login'
import Choice from './components/choice/choice'
import Questions from './components/questions/questions'

function App() {
  const [test,setTest] = useState('0')
  // const content = test === '0' ? <Landing setTest = {(data)=>{
  //   console.log(data)
  //   setTest(data)
  //   }} /> : test === '1' ? <Login/> : null 
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://i.imgur.com/gQC4wPM.png' className="App-logo" alt="logo" />
        <div className='title'>Sistema de Feedback Interno</div>
        <Questions/>
      </header>
      
    </div>
  );
}

export default App;
