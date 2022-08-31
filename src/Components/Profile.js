import {React,useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import Address from './Address';

const Profile = () => {

    const [mobile,setMobile]=useState('');
    const [address,setAddress]=useState('');
    const [addedAddress,setAddedAddress]=useState([]);
    const [currentMobile,setCurrentMobile]=useState('');
    const [mobileEdit,setMobileEdit]=useState('hidden');
    const [addressEdit,setAddressEdit]=useState('hidden');
    const [list,setList]=useState([]);
    
    var items=[];
    const changePhone=()=>{

         setMobile(currentMobile)
         setMobileEdit('hidden')
    }

    const openEditor=()=>{

        setMobileEdit('mobile-edit')
    }

    const showInputBox=()=>{
      
      setAddressEdit('address-editor');

    }

    const addAddress=()=>{

      setAddedAddress([address]);
      setAddressEdit('hidden');
      items.push(address)
      
    }

    
  return (
    <>

     <div className="main-profile">
     <div className="innerBox">
        <h1>User name :{}</h1>

        <h1>Mobile  :{mobile} <br/><button className='update-button' onClick={openEditor}>Add/Edit Mobile Number </button></h1> 
        <div className={mobileEdit}>
        <h1><label htmlFor="Name" className="update-mobile" >Update mobile number</label></h1><br/>
            <input type="text" pattern="/(7|8|9)\d{9}/" className="update-mobile" value={currentMobile}
        onChange={(e) => setCurrentMobile(e.target.value)}  maxlength="10" required/> 
        <button className='update-button' onClick={changePhone}>Update</button>
        </div>
        
        <h1>Address : </h1><br/>

{/* 
        {
              items.map((curData) => {
                    return <Address  {...curData}/>
                  console.log(curData)
                })
            } */}

        <Address addedAddress={addedAddress}/>
        


        <br/><button className='update-button' onClick={showInputBox}>Click here to Add New Address</button>
        <div className={addressEdit}>
        <label htmlFor="Name" className="update-address-headline" >Update Address</label><br/>
            <input type="text"  className="update-mobile" value={address}
        onChange={(e) => setAddress(e.target.value)}  required/> 
        <div className="buttons">
        <button className='update-button' onClick={addAddress}>Update</button>
        <button className='update-button' onClick={addAddress}>Edit</button>
        </div>
        </div>
     </div> 
     </div>
    </>
  )
}

export default Profile
