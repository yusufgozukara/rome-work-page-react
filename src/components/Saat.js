import React, {useState} from 'react';



function Saat(){
    const [vakit, setVakit] = useState();
    
    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        setVakit(time) 
    },1000)



    return (
        <div>
            <p className='saat'>{vakit}</p>
            
        </div>
        
    )
}
export default Saat;

