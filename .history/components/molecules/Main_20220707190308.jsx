import React from 'react'
import {ProductContainer} from '../atoms/main/ProductContainer'
import {ProductDescription} from '../atoms/main/ProductDescription'

export const Main = () => {
  return (
    <main className="main">
        <section>
        <ProductDescription/>
        </section>
        <section>
        <ProductContainer/>
        </section>
    </main>
  )
}
