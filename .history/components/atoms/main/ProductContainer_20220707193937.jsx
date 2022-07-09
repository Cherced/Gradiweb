import React from 'react'

export const ProductContainer = (props) => {
  return (
    <div class="main-product-picture">
        <div class="main-picture">
            <img src={props.img} alt={props.alt}/>
        </div>
    </div>            
  )
}
