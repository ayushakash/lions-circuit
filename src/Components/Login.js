import {React, useState} from 'react'
import { useNavigate} from "react-router-dom";


const validateEmail = (email) => {                   //function to validate email
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

// const validatePassword = (password) => {                //function to validate password
//     return String(password)
//         .toLowerCase()
//         .match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
// };
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    
    const navigateToProducts = async () => {

        if (validateEmail(email)) {

           
              navigate('/products')                                    //this line navigates to products page
            

        } else {
            console.log("Please enter a valid email")

            setError('Please enter a valid email')

        }

    }

    const formSubmit = (e) => {
        e.preventDefault()
    }

    return (<> < div className = "login_main" > <form onSubmit={formSubmit}>
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
                autoComplete="off"
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
                autoComplete="off"
                className="input_field"
                placeholder='password'
                minLength="8"
                required="required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/><br/>
            <div className="login-button-div">
                <button className="login-button" type="submit" onClick={navigateToProducts}>Login</button>
            </div>
        </div>

    </form>

</div> </>
    )
}

export default Login