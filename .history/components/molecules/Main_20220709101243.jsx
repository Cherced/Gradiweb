import React from 'react'
import {ProductDescription} from '../atoms/main/ProductDescription'
import { SliderSmallCase } from '../atoms/main/SliderSmallCase'

export const Main = () => {
  return (
    <>
    <main className="main">
        <section className="main__description--container">
        <ProductDescription/>
        </section>
        <section className="main__carrousel--container">
        <SliderSmallCase/>
        </section>
    </main>
    </>  
    
  )
}
