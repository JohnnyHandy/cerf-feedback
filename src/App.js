import React,{useState} from 'react';
import './App.css';
import Landing from './components/landing/landing'
import Login from './components/login/login'
import Choice from './components/choice/choice'
import Questions from './components/questions/questions'

function App() {
  const [stage,setStage] = useState('0');
  const [test,setTest] = useState(null);
  const [login,setLogin] = useState(null);
  const [loginPic,setLoginPic] = useState(null)
  const [choice,setChoice]=useState(null);
  const [choicePic,setChoicePic]=useState(null)
  const [data,setData]=useState([{
    name:'Fred',
    url:'https://i.imgur.com/B7eASOZ.png'
  },{
    name:'Geraldo',
    url:'https://i.imgur.com/YPEVOGu.png'
  },{
    name:'Izabel',
    url:'https://i.imgur.com/a3tbUyJ.png'
  },{
    name:'Pedro',
    url:'https://i.imgur.com/MIofgxK.png'
  },{
    name:'Ramon',
    url:'https://i.imgur.com/nWNbSkX.png'
  }])
  function checkArray(login){
    setLogin(login)
    data.map((i)=>{
      if(i.name===login){
        return setLoginPic(i.url)
      }
      return null
    })
    setData(data.filter((array)=>{
   return array.name !== login
      }))
  }
  const component = 
  stage === '0' ? <Landing
    login ={login} 
    setStage={(stage)=>setStage(stage)} 
    setTest={(test)=>setTest(test)}/> :
  stage ==='1' && !login ? <Login
    test={test} 
    setStage={(stage)=>setStage(stage)}
    setLogin={(login=>checkArray(login))}/> :
  stage ==='2' ? <Choice
    user={login}
    userPic={loginPic}
    data={data}
    setStage={(stage)=>setStage(stage)}
    setChoice={(choice)=>{
      setChoice(choice)
      data.map((i)=>{
        return i.name === choice ? setChoicePic(i.url):null
      })
    }}/> :
  stage ==='3' ? <Questions
    user={login}
    userPic={loginPic}
    choice={choice}
    choicePic={choicePic}
    /> :
  null ;
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          <div className="App-logo"><img src='https://i.imgur.com/gQC4wPM.png'  alt="logo" /></div>
          {login ? <div className='login-icon'><img src={loginPic}  alt='icon'/></div> : <div onClick={()=>setStage('1')} className='login'>Login</div>}
        </div>
        <div className='title'>Sistema de Feedback Interno</div>
        {component}
      </header>
      
    </div>
  );
}

export default App;
