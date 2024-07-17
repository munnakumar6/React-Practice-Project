import { useState } from 'react';
import './App.css';

const upperval = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerval = "abcdefghijklmnopqrstuvwxyz";
const numberval = "1234567890";
const symboleval = "~!@#$%^&*()_+/";

function App() {
  const [Password, setPassword] = useState('');
  const [range, setRange] = useState(8);
  const [uppercase, setUppercase] = useState(true);
  const [lower, setLower] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbole, setSymbole] = useState(false);

  function generatePassword() {
    let str = '';
    if (uppercase) {
      str += upperval;
    }
    if (lower) {
      str += lowerval;
    }
    if (number) {
      str += numberval;
    }
    if (symbole) {
      str += symboleval;
    }

    let password = '';
    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      password += str[randomIndex];
    }

    setPassword(password);
  }

  return (
    <>
      <div className="main">
        <div className="container">
          <h2>Password Generator</h2>
          <div>
            <input
              type="text"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              id="userinput"
            />
          </div>
          <div className="checkbox">
            <div className="alphabat">
              <div className="right">
                <span>Range ({range})</span>
              </div>
              <div className="left">
                <input
                  type="range"
                  min={8}
                  max={50}
                  value={range}
                  id="usernumber"
                  onChange={(e) => setRange(e.target.value)}
                />
              </div>
            </div>
            <div className="alphabat">
              <div className="right">
                <span>UpperCase (A-Z)</span>
              </div>
              <div className="left">
                <input
                  type="checkbox"
                  id="uppercase"
                  checked={uppercase}
                  onChange={() => setUppercase(!uppercase)}
                />
              </div>
            </div>
            <div className="alphabat">
              <div className="right">
                <span>LowerCase (a-z)</span>
              </div>
              <div className="left">
                <input
                  type="checkbox"
                  id="lowercase"
                  checked={lower}
                  onChange={() => setLower(!lower)}
                />
              </div>
            </div>
            <div className="alphabat">
              <div className="right">
                <span>Number (0-9)</span>
              </div>
              <div className="left">
                <input
                  type="checkbox"
                  id="number"
                  checked={number}
                  onChange={() => setNumber(!number)}
                />
              </div>
            </div>
            <div className="alphabat">
              <div className="right">
                <span>Symbole</span>
              </div>
              <div className="left">
                <input
                  type="checkbox"
                  id="symbole"
                  checked={symbole}
                  onChange={() => setSymbole(!symbole)}
                />
              </div>
            </div>
            <button onClick={generatePassword}>Generate Password</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
