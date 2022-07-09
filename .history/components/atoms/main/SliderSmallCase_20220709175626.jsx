import React from 'react'
import {useRouter} from 'next/router'


export const SliderSmallCase = (props) => {
    const router = useRouter();
    function goToPage() {
      /*   router.push('/product/[id]', `/product/${props.id}`) */
    }
  return (
        <button onClick={goToPage} className="LinkTooContainer" >
            <label>{props.nameItem}</label>
            <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src={props.src} alt={props.nameItem}/>
                </div>
            </button>    
  )
}
