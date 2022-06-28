import React, { useState } from "react";


function Sayac() {
  const [count, Mahmut] = useState(5);

  const [kocaayak, setKocaayak] = useState('Where is the following structure and what is its name? Hover mouse over this text to see...'); 
  return (
    <div className="sayac">
      <h4>Aşağıdaki yapıya kaç kez gittin? </h4>
      <h2>{count}</h2>
      <div>
        <button onClick={() => { Mahmut(count - 1); }}
        >Azalt</button><br/><br/>

        <button
          onClick={() => {
            Mahmut(count + 1);
          }}
        >
          Artır
        </button><br /><br />
      </div>
      <div>
        <p id="degis" onMouseOut={() =>{
          setKocaayak('Where is the following structure and what is its name? Hover mouse over this text to see...')
        }} onMouseOver={() => {
          setKocaayak('Collesium - Rome')
        }}>{kocaayak}</p>
      </div>
    </div>
  );
}

export default Sayac;