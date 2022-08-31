import React from 'react'

const Card = ({title,price,image,cardToBody,_id}) => {
  return (
    <>
    <div className="card">

<img src={image} className="cart-images" alt="image"></img>
<p className="item-name"><strong>{title}</strong></p>

<p className="item-price">Rs.<strong>{price}</strong></p>
</div>
      
    </>
  )
}

export default Card
