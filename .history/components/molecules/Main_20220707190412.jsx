import React from 'react'
import {ProductContainer} from '../atoms/main/ProductContainer'
import {ProductDescription} from '../atoms/main/ProductDescription'

export const Main = () => {
  return (
    <main className="main">
        <section className="main__description--container">
        <ProductDescription/>
        </section>
        <section className="main__product--container">
        <ProductContainer/>
        </section>
    </main>
  )
}
