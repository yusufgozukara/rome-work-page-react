import React, { useState } from "react";

const MouseEvent = () => {

    const[show,setShow] = useState(false);
    const [toggleBG, setToggleBG] = useState(false);

    // const handleDoubleClick = (e) => {
    //     setToggleBG(!toggleBG);
    //     toggleBG
    //     ? (e.target.style = {backgroundColor:'black'})
    //     : (e.target.style = {backgroundColor:'gray'})
    // }

  return (
    <div>
      <h1>Mouse Event</h1>

      <div
        style={{
          width: "80%",
          height: "100px",
          lineHeight: "100px",
          backgroundColor: "orange",
          margin: "20px auto",
        }}
        onMouseEnter={()=>setShow(false)}
        onMouseLeave={()=> setShow(true)}
      >
        {show ? "ToDo-1 (onMouseEnter)" : "ToDo-1 değişiyor."} 
      </div>
      {/* <div
      style={{
        width: "80%",
        height: "100px",
        lineHeight: "100px",
        backgroundColor: "gray",
        margin: "20px auto",
      }}
      // onDoubleClick={handleDoubleClick}
      >ToDo-2</div> */}

    </div>
  );
};

export default MouseEvent;
