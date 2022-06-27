import Msg from "./Msg";


const Person = (props) => {
    const {name, tel, img} = props;
  return (
    <div className="personn">
        <h1>Roma Tatili Talihlilerimiz</h1>
        <Msg isim = {name}/>
        {/* <h1>Merhaba {name}</h1> */}
        <p>{tel}</p>
        <img src={img} alt="img" />
    </div>
  )
}

export default Person