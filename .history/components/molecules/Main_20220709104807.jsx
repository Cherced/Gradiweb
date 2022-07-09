import React from 'react'
import {ProductDescription} from '../atoms/main/ProductDescription'
import { SliderSmallCase } from '../atoms/main/SliderSmallCase'
import {getShoes} from '../../db/data.cherced'

export const Main = () => {
  const [allShoes, setAllShoes] = React.useState([])

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      getShoes().then((data)=>{
        setAllShoes(data)
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
            allShoes.map((shoe) => {
              return(
                  <SliderSmallCase src={shoe.images} nameItem={shoe.title.substring(0,15)} />
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
