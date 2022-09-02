import React from 'react';

const Address = ({addedAddress, onEdit}) => {
  return (
    <>
    <div className="address-card" onClick={() => onEdit(addedAddress.id, addedAddress.address)}>
          <h3>{addedAddress.id}. {addedAddress.address}</h3>
    </div>                
      
    </>
  )
}

export default Address;
