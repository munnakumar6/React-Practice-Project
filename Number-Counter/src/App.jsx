import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

 function Increase(){
  setCounter((prevcounter)=>{
    let newcounter = prevcounter+1;
     return newcounter <=10 ?(newcounter === 10 ?( alert('You Increase Your Counter 10 Times Only !'),newcounter):newcounter):prevcounter
  })
 }

 function Decrease(){
  setCounter((prevcounter)=>{
    let newcounter = prevcounter-1
    return newcounter >= 0 ? newcounter : prevcounter
  })
 }

  return (
    <>
      <div className="container">
        <div className="main">
          <h1>Counting-Number {counter}</h1>
          <button onClick={Increase}>Increase</button>
          <button onClick={Decrease}>Decrease</button>
        </div>
      </div>
    </>
  );
}

export default App;
