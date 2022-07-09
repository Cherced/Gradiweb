import React from 'react'
import {ProductContainer} from '../atoms/main/ProductContainer'
import {ProductDescription} from '../atoms/main/ProductDescription'
import {ProductCarrousel} from '../atoms/main/ProductCarrousel'

export const Main = () => {
  return (
    <>
    <main className="main">
        <section className="main__description--container">
        <ProductDescription/>
        </section>
    </main>
    <section className="main__carrousel--container">
        <ProductCarrousel/>
    </section>
    </>  
    
  )
}
