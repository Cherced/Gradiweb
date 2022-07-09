import React from 'react'
import {ProductDescription} from '../atoms/main/ProductDescription'
import { SliderSmallCase } from '../atoms/main/SliderSmallCase'
import {getProducts} from '../../db/data.cherced'

export const Main = () => {
  const [allproducts, setAllproducts] = React.useState([])

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      getProducts().then((data)=>{
        setAllproducts(data)
      })
    }
    return () => mounted = false;

  },[])

  return (
    <>
    <main className="main">
        <section className="main__description--container">
        <ProductDescription/>
        </section>
        <section className="main__carrousel--container">
        <div className="SliderSmallCaseContainer">
        <div className="SliderSmallCase" id="sliderS">
          {
            allproducts.map((item) => {
              return(
                  <SliderSmallCase key={item?.id} src={item?.image} nameItem={item?.title.substring(0,15)} />
              )
            })
          }
        </div>
      </div>
        </section>
    </main>
    </>  
    
  )
}
