import { useState } from "react"


const FormShort = () => {

    const [formValue, setFormValue] = useState({
        username:'',
        email:'',
        password:''
    });

    const handleFormValue = (e) =>{
        setFormValue({...formValue, [e.target.id] : e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, email, password} = formValue;
         alert(`
         Username : ${username}
         E-mail adress : ${email}
         `);
        //  setEmail('');
        //  setUsername('');
        //  setPassword('');

    }

   

  return (
      <div>
      <h1  style={{marginTop:'5rem'}}>Siz de çekilişe katılmak ister misiniz?</h1>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
        Username : (<span style={{color:'red'}}>{formValue.username}</span>)
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputtext"
        value={formValue.username}
        onChange={handleFormValue}
      /> <br/>
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address : (<span style={{color:'green'}}>{formValue.email}</span>) 
      </label>
      <input  style={{margin:'2rem'}}
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        onChange={handleFormValue}
        value={formValue.email}
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
        onChange={handleFormValue}
        value= {formValue.password}
      />
    </div>

    <button className="chlan"  style={{margin:'2rem'}} type="submit">
      Submit
    </button>
  </form>
</div>
  )
}

export default FormShort