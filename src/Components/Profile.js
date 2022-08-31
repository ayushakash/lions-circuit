import {React, useState, useEffect} from 'react'
import Address from './Address';

const Profile = () => {

    const [mobile, setMobile] = useState('');

    const [currentMobile, setCurrentMobile] = useState('');
    const [mobileEdit, setMobileEdit] = useState('hidden');
    const [addressEdit, setAddressEdit] = useState('hidden');
    const [addressAdd, setAddressAdd] = useState('');
    const [editCss,setEditCss]=useState('hidden')
    const [editId,setEditId] = useState(0)
    const [items, setItems] = useState([
        {
            'id': 1,
            'address': 'ranchi'
        }
    ]);
    const [newAddress, setNewAddress] = useState('');

    const changePhone = () => {

        setMobile(currentMobile)
        setMobileEdit('hidden')
    }

    const openEditor = () => {

        setMobileEdit('mobile-edit')
    }

    const showInputBox = () => {

        setAddressEdit('address-editor');

    }

    const addAddress = () => {
        let temp = items
        let length = items.length;
        let obj = {
            'id': length + 1,
            'address': newAddress
        }

        temp.push(obj)
        setItems([...temp]);
        setAddressEdit('hidden');

    }

    const changeValue = (e) => {

        console.log('change value'+e.target.value)

        if(e.target.value === ''){

            console.log('Enter valid address')

        }else{

            setNewAddress(e.target.value)
        }
    }

    const changeEditValue = (e) => {
      setAddressAdd(e.target.value)
    }

    const editAddress = (id, val) => {
        console.log(id, val)

        if(val===''){
            console.log('enter valid address')
        }else{

            setAddressAdd(val)
        }
        setEditId(id)
        setEditCss('address-editor')

        // show edit input field
          // input field value => newAdd
          // onChange => save to new variable
          
        // Edit Button Click => new variable will set to item[id]
    }

    const onClickEdit=()=>{
      
      console.log(editId ,addressAdd)
      let temp = items;

      let foundItem = items.filter(item => item.id === editId)
      foundItem = foundItem[0]

      let index = foundItem.id - 1

      let obj = {
        id: editId,
        address: addressAdd
      }
    
      items.splice(index, 1, obj)
      console.log(items)

      setEditCss('hidden')

    }


    return (
        <> < div className = "main-profile" > <div className="innerBox">
            <h1>User name :{}</h1>

            <h1>Mobile: {
                    mobile
                }
                <br/>
                <button className='update-button' onClick={openEditor}>Add/Edit Mobile Number
                </button>
            </h1>
            <div className={mobileEdit}>
                <h1>
                    <label htmlFor="Name" className="update-mobile">Update mobile number</label>
                </h1><br/>
                <input
                    type="text"
                    pattern="/(7|8|9)\d{9}/"
                    className="update-mobile"
                    value={currentMobile}
                    onChange={(e) => setCurrentMobile(e.target.value)}
                    maxlength="10"
                    required="required"/>
                <button className='update-button' onClick={changePhone}>Update</button>
            </div>

            <h1>Address :
            </h1><br/>

            <small>Click on address to edit</small>
            <div className="products-grid">
                
                {

                    items.map((item) => {
                        return <Address addedAddress={item} onEdit={editAddress}/>
                    })

                }

            </div>

            <br/>
            <button className='update-button' onClick={showInputBox}>Click here to Add New Address</button>
            <div className={addressEdit}>
                <label htmlFor="Name" className="update-address-headline">Add Address</label><br/>
                <input
                    type="text"
                    className="update-address"
                    value={newAddress}
                    onChange={changeValue}
                    name="newAddress"
                    required="required"/>
                <div className="buttons">
                    <button className='update-button' onClick={addAddress}>Add</button>
                    
                </div>
            </div>

            <div className={editCss}>
                <label htmlFor="Name" className="update-address-headline">Edit Address</label><br/>
                <input
                    type="text"
                    className="update-address"
                    value={addressAdd}
                    onChange={changeEditValue}
                    name="addressAdd"
                    required="required"/>
                <div className="buttons">
                    <button className='update-button' onClick={onClickEdit}>Edit</button>
                    
                </div>
            </div>
        </div>
    </div>
</>
    )
}

export default Profile
