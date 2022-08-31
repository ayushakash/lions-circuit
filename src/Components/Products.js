import React from 'react'
import Card from './Card';
import {datas} from '../Data';


const Products = () => {
  // console.log(datas)
  return (
    <>
    <div className="products-grid">
        

    {
              datas.map((curData) => {
                    return <Card key={curData._id} {...curData}/>
                  console.log(curData)
                })
            }
        
        

    </div>
      
    </>
  )
}

export default Products
