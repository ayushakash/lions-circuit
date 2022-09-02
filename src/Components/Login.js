import {React, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import Products from './Products';

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePassword = (password) => {
    return String(password)
        .toLowerCase()
        .match(
            /^[A-Za-z]\w{7,14}$/
        );
};
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [emailToSave, setEmailToSave] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    console.log(email);
    const navigateToProducts = () => {
        // validateEmail(email)
        if (validateEmail(email) ) {
            
                 navigate('/products')
                 
                 setEmailToSave(email);
             
                    
                    
                } else{
            console.log("Please enter a valid email")
            
            setError('Please enter a valid email')

        }
        // else if (validatePassword(password)) {




        // } else {
        //     // navigate to products page
        // }

        
    }

    const formSubmit = (e) => {
        e.preventDefault()
    }

    // value={address} onChange={(e) => setAddress(e.target.value)}

    return (
        <> < div className = "login_main" > <form onSubmit={formSubmit}>
            <div className="login_container">
                <div className="form-header">
                    <h4>Welcome to Lion Ciruits</h4>
                </div>
                <small style={{
                        color: 'red'
                    }}>{error}
                    <br/></small>
                <label htmlFor="Name" className="form-label">Email</label><br/>
                <input
                    className="input_field"
                    autocomplete="off"
                    required="required"
                    type="email"
                    placeholder='lion.circuit@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/><br/>
                <label htmlFor="Name" className="form-label">Password</label><br/>
                <input
                    type="password"
                    id="pass"
                    name="password"
                    autocomplete="off"
                    className="input_field"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"

                    placeholder='password'
                    minlength="8"
                    required="required"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/><br/>
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
