import { useState, useEffect } from "react";

const UseEffectSample = () => {
    const [count, setCount] = useState(0);

const handleClick = () => {
    setCount(count + 1); 
}

useEffect(() => {
  console.log('mounted');
  setTimeout(() => {
    alert('Sitemize hoşgeldiniz');
  }, 2000)

}, [])

console.log('rendered');
  return (
    <div>
        
        <h1>Use Effect Sample</h1>
        <h2>Count : {count}</h2>
        <button onClick={handleClick} className="chlan">+1 Artır</button>

    </div>
  )
}

export default UseEffectSample