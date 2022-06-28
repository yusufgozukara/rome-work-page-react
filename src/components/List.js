import { useState } from "react"


const List = () => {

    const [talihli, setTalihli] = useState(["Eşim", "Kızım"])
    const [romaci, setRomaci] = useState('')

    const handleRoma = () => {
        setTalihli((previous)=> {
            return [...previous, romaci]
        });
        setRomaci('');
    }


  return (
    <div>
       <h1 style={{color:"orange"}}>Bu tarihi yere kimlerle gitmek istersin?</h1>
    <input type="text" value={romaci} onChange={(event)=> setRomaci(event.target.value)} />
    <button onClick={handleRoma} className="chlan">Ekle</button>

    {talihli.map((madde, index)=>{
        return  <p key={index}>☑{madde}</p> 
    })}
    </div>
    
  )
}

export default List