import { useState } from "react"


const Form = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
        // console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         alert(`
         Username : ${username}
         E-mail adress : ${email}
         Password : password is secret
         `);
         setEmail('');
         setUsername('');
         setPassword('');

    }

  return (
      <div>
      <h1  style={{marginTop:'5rem'}}>Siz de çekilişe katılmak ister misiniz?</h1>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
        Username : (<span style={{color:'red'}}>{username}</span>)
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputtext"
        onChange={handleUsername}
        value={username}
      /> <br/>
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address : (<span style={{color:'green'}}>{email}</span>) 
      </label>
      <input  style={{margin:'2rem'}}
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input  style={{margin:'2rem'}}
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        onChange={(e) => setPassword(e.target.value)}
        value= {password}
      />
    </div>

    <button className="chlan"  style={{margin:'2rem'}} type="submit">
      Submit
    </button>
  </form>
</div>
  )
}

export default Form