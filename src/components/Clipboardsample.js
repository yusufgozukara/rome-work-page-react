import React, { useState } from 'react'

const Clipboardsample = () => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        console.log(e.keyCode);
        e.target.value = e.target.value.toUpperCase();
    }
  return (
    <div>
        <h1>Keyboard Clipboard Sample</h1>
        <h3>Altındaki paragrafı büyük harfe çevirir.</h3>
        <input type="text"
        value={inputValue}
        onChange= {(e) => setInputValue(e.target.value)}
        />
        <p>{inputValue.toUpperCase()}</p>

        <h3>Altındaki ve içindeki paragrafı büyük harfe çevirir.</h3>
        <input type="text"
        value={inputValue}
        onChange= {(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <p>{inputValue}</p>
    </div>
  )
}

export default Clipboardsample