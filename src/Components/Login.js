import {React,useState} from 'react'
import {Link,useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const  [email,setEmail]=useState('')
  console.log(email);
  const navigateToProducts=()=>{

    if(email==='ayushakash9@gmail.com'){
      navigate('/products')
    }
    else{
      navigate('')
    }
  }

  // value={address}
  // onChange={(e) => setAddress(e.target.value)}

  return (
    <>
     <div className="login_main">
     <form action="#" method="post">
        <div className="login_container">
        <div className="form-header">
        <h4>Welcome to Lion Ciruits</h4></div>
        <label htmlFor="Name" className="form-label">Email</label><br/>
            <input className="input_field"  autocomplete="off" required type="text" placeholder='lion.circuit@gmail.com' 
  value={email}
  onChange={(e) => setEmail(e.target.value)}/><br/>
        <label htmlFor="Name" className="form-label">Password</label><br/>
        <input type="password" id="pass" name="password" autocomplete="off" className="input_field" placeholder='password'
           minlength="8" required/><br/>
        <div className="login-button-div">
        <button className="login-button" type="submit" onClick={navigateToProducts}>Login</button>
        </div>    
        </div>
        
</form>

     </div> 
    </>
  )
}

export default Login
