import {React, useState} from 'react';
import Address from './Address';

const validateMobile = (mobile) => {
    return String(mobile)
        .toLowerCase()
        .match(/^[6-9]\d{9}$/);
};

// const validateName = (name) => {
//     return String(name)
//         .toLowerCase()
//         .match(/^[A-Za-z\s]+$/);
// };

const Profile = () => {

    const [mobile, setMobile] = useState('8553545862');
    const [finalAddress, setFinalAddress] = useState([]);
    const [currentMobile, setCurrentMobile] = useState('');
    const [mobileEdit, setMobileEdit] = useState('hidden');
    const [mobileError, setMobileError] = useState('');
    const [addressEdit, setAddressEdit] = useState('hidden');
    const [addressAdd, setAddressAdd] = useState('');
    const [blankAddressError, setBlankAddressError] = useState('');
    const [blankNewAddressError, setBlankNewAddressError] = useState('');
    const [editCss, setEditCss] = useState('hidden')
    const [currentUsername, setCurrentUsername] = useState('')
    const [nameEdit, setNameEdit] = useState('hidden')
    const [username, setUsername] = useState('Ayush Akash')
    const [newAddress, setNewAddress] = useState('');
    const [editId, setEditId] = useState(0)
    const [dbButton, setDbButton] = useState('update-button')
    const [dbButtonText, setDbButtonText] = useState('Save changes to Database')
    const [items, setItems] = useState([
        {
            'id': 1,
            'address': '304/c Hiranandani Appartment,Akshay Nagar ,Bangalore'
        }
    ]);
    
    // 
    async function sendToDatabase() {
        setDbButtonText('Data Saved')

        setDbButton('updated-db-button')
        

        const response = await fetch('http://localhost:4000/store', {                   //this function sends data to backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

                mode: 'no-cors'
            },

            body: new URLSearchParams(
                {"name": username, "address": finalAddress, "mobile": mobile}
            )

        });
        console.log(response);
    }

    const changeUsername = () => {

        setUsername(currentUsername);
        setNameEdit('hidden')

    }

    const changePhone = () => {

        setMobileError('');
        if (validateMobile(currentMobile)) {

            setMobile(currentMobile)

        } else {
            setMobileError('Enter Valid Mobile Number')

        }
        setMobileEdit('hidden')
    }

    const openEditor = () => {

        setMobileEdit('mobile-edit')
        setDbButtonText('Save changes to Database')
        setDbButton('update-button')
    }

    const openNameEditor = () => {

        setNameEdit('mobile-edit')
        setDbButtonText('Save changes to Database')
        setDbButton('update-button')
    }

    const showInputBox = () => {
        setDbButtonText('Save changes to Database')
        setDbButton('update-button')

        setAddressEdit('address-editor');

    }

    const addAddress = () => {                                              //this function pushes new address to the array of address
        let temp = items
        let length = items.length;
        let obj = {
            'id': length + 1,
            'address': newAddress
        }
        
        setFinalAddress(temp);

        setBlankAddressError('')

        if (obj.address === '') {

            setBlankAddressError('Address cannot be blank')
        } else {

            temp.push(obj)
            setItems([...temp]);
        }
        setAddressEdit('hidden');

    }

    const changeValue = (e) => {

        setNewAddress(e.target.value)

    }

    const changeEditValue = (e) => {
        setAddressAdd(e.target.value)
    }

    const editAddress = (id, val) => {
        console.log(id, val)

        if (val === '') {
            console.log('enter valid address')
        } else {

            setAddressAdd(val)
        }
        setEditId(id)
        setEditCss('address-editor')

    }

    const onClickEdit = () => {                                                 //function to edit the address on click
        setDbButtonText('Save changes to Database')
        setDbButton('update-button')
        console.log(editId, addressAdd)
        // let temp = items;
        setBlankNewAddressError('')
        let foundItem = items.filter(item => item.id === editId)
        foundItem = foundItem[0]

        let index = foundItem.id - 1

        let obj = {
            id: editId,
            address: addressAdd
        }
        console.log(obj.address)

        if (obj.address === '') {

            setBlankNewAddressError('Edited Address cannot be blank')

        } else {

            items.splice(index, 1, obj)
            setFinalAddress(items);

        }

        setEditCss('hidden')

    }

    return (<> 
    <div className = "main-profile" > <div className="innerBox">
        <h1>User Name :{username}</h1>

        <button className='update-button-mobile' onClick={openNameEditor}>Add/Edit User Name
        </button>

        <div className={nameEdit}>
            <h1>
                <label htmlFor="Name" className="update-mobile">Change User Name</label>
            </h1><br/>
            <input
                type="text"
                className="update-mobile"
                value={currentUsername}
                onChange={(e) => setCurrentUsername(e.target.value)}
                maxLength="15"
                required="required"/>
            <button className='update-button' onClick={changeUsername}>Update</button>
        </div>

        {/* //////////////////////////////////////////////// */}
        <h1>Mobile: {mobile}

            <small style={{
                    color: 'red'
                }}>{mobileError}<br/></small>
        </h1>
        <button className='update-button-mobile' onClick={openEditor}>Add/Edit Mobile Number
        </button>

        <div className={mobileEdit}>
            <h1>
                <label htmlFor="Name" className="update-mobile">Update mobile number</label>
            </h1><br/>
            <input
                type="text"
                className="update-mobile"
                value={currentMobile}
                onChange={(e) => setCurrentMobile(e.target.value)}
                maxLength="10"
                required="required"/>
            <button className='update-button' onClick={changePhone}>Update</button>
        </div>
        <div className="color">
            <h1>Address
            </h1><br/>
            <small style={{
                    color: 'red'
                }}>{blankAddressError}<br/></small>
            <small style={{
                    color: 'red'
                }}>{blankNewAddressError}<br/></small>

            <small>Click on address to edit</small>
            <div className="products-grid">

                {

                    items.map((item) => {
                        return <Address key={item.id} addedAddress={item} onEdit={editAddress}/>
                    })

                }

            </div>
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
    <button className={dbButton} onClick={sendToDatabase}>{dbButtonText}</button>
</div> </>
    )
}

export default Profile