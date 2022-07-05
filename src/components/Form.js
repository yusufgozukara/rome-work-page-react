import { useState } from "react"


const Form = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
        // console.log(e.target.value);
    }

  return (
      <div>
      <h1  style={{marginTop:'5rem'}}>Siz de çekilişe katılmak ister misiniz?</h1>
  <form>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
        Username : (<span style={{color:'red'}}>{username}</span>)
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputtext"
        onChange={handleUsername}
      /> <br/>
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address : (<span style={{color:'green'}}>{email}</span>) 
      </label>
      <input  style={{margin:'2rem'}}
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        onChange={(e) => setEmail(e.target.value)}
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
      />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
    <button  style={{margin:'2rem'}} type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
</div>
  )
}

export default Form