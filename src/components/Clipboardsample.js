import React, { useState } from 'react'

const Clipboardsample = () => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        console.log(e.keyCode);
        e.target.value = e.target.value.toUpperCase();
        e.keyCode == 13 && alert('Entera basıldı.')
    }

    const handleArea = (e) => {
        e.target.value = e.clipboardData.getData('text').toLowerCase();
        e.preventDefault();
    }
  return (
    <div>
        <h1>Keyboard Clipboard Sample</h1>
        <h3>Altındaki paragrafı büyük harfe çevirir.</h3>
        <input type="text"
        value={inputValue}
        onChange= {(e) => setInputValue(e.target.value)}
        />
        <p onCopy={() => alert('Dikkat!! Kopyalandı')}>{inputValue.toUpperCase()}</p>

        <h3>Altındaki ve içindeki paragrafı büyük harfe çevirir.</h3>
        <input type="text"
        value={inputValue}
        onChange= {(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <p>{inputValue}</p>

        <textarea name="ara" id="ara" cols="50" rows="10" onPaste={handleArea}></textarea>
    </div>
  )
}

export default Clipboardsample