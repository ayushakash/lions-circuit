import React from 'react'
import {Link,useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();

  const navigateToProfile=()=>{

    navigate('/profile')
  }

  const location = useLocation()                  //function to chek location of page
  

  let showProfile;
  if (location.pathname === "/") {
    // console.log("location is login page")
    showProfile = false
  } else {
    showProfile = true
    // console.log("location is other pages")
  }
    

  return (
    <>

    <div className="navbar-main">
        <div className="logo">

        <Link  to="/"><img className="logo-image"src="/lioncircuits-logo.png" alt="logo"/></Link>
        </div>

        {
          showProfile ? 
          <div className="profile-button">
            <button className="login-button" onClick={navigateToProfile}><img className="user-logo"src="/user.png" alt="logo"/>  Profile</button>
          </div>
          : <></>
        }
        
    </div>


    </>
  )
}

export default Navbar

