import React from 'react'

export const ProductDescription = () => {
  return (
    <React.Fragment>
    <section className="main-product-container">
  <div className="pinky-background" />
  <h2 className="main-price">$110.00</h2>
  <h1 className="main-title">Converse <span>G4</span></h1>
  <div className="main-rank">
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
  </div>
  <article className="main-product-description">
    <p>The traction on theConverse G4 Low was good and worked well indoors and outdoors. It suffered a little on dust but could be easily wiped off.</p>
    <p>The cushion setup is very responsive and the React cushion used is more firm than React used in running shoes.</p>
    <p>The materials are solid and rigid which helps with the shoes overral stability. They are comfortable on foot.</p>
  </article>
  <a className="cart-button" href="www.google.com">Add to Cart</a>
  <div className="main-product-picture">
    <div className="main-picture" />
  </div>
</section>
    </React.Fragment>    
  )
}
