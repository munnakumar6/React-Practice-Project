import { useState } from 'react';
import './App.css';

function App() {
  let [color, setColor] = useState("")
  document.body.style.backgroundColor = color;

  return (
    <>

      <h1>Background Changer....</h1>
      <h2>Clicked Button and Change Background</h2>
    <div className='btnsection'>
      <button onClick={()=>setColor("red")} style={{ backgroundColor: "red", color:'white' }}>Red</button>
      <button onClick={()=>setColor("green")} style={{ backgroundColor: "green", color:'white' }}>Green</button>
      <button onClick={()=>setColor("blue")} style={{ backgroundColor: "blue", color:'white' }}>Blue</button>
      <button onClick={()=>setColor("orange")} style={{ backgroundColor: "orange", color:'white' }}>Orange</button>
      <button onClick={()=>setColor("yellow")} style={{ backgroundColor: "yellow", color:'white' }}>Yellow</button>
      <button onClick={()=>setColor("black")} style={{ backgroundColor: "black", color:'white' }}>Black</button>
      <button onClick={()=>setColor("pink")} style={{ backgroundColor: "pink", color:'white' }}>pink</button>
      <button onClick={()=>setColor("purple")} style={{ backgroundColor: "purple", color:'white' }}>purple</button>

    </div>

    </>
   
  );
}

export default App;
