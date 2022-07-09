import React from 'react'
import {ProductDescription} from '../atoms/main/ProductDescription'
import {ProductCarrousel} from '../atoms/main/ProductCarrousel'

export const Main = () => {
  return (
    <>
    <main className="main">
        <section className="main__description--container">
        <ProductDescription/>
        </section>
        <section className="main__product--container">
        <ProductContainer/>
        </section>
    </main>
    <section className="main__carrousel--container">
        <ProductCarrousel/>
    </section>
    </>  
    
  )
}
