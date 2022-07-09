import React from 'react'

export const ProductDescription = () => {
  return (
    <React.Fragment>
    <section className="main-product-container">
  <div className="pinky-background" />
  <h2 className="main-price">$110.00</h2>
  <h1 className="main-title">product <span>reference</span></h1>
  <div className="main-rank">
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
  </div>
  <article className="main-product-description">
    <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique.</p>
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  </article>
  <a className="cart-button" href="www.google.com">Add to Cart</a>
  <div className="main-product-picture">
    <div className="main-picture" />
  </div>
</section>
    </React.Fragment>    
  )
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js");
    if (res.status !== 200)  throw new Error ("error", res.statusText)
    const data = await res.json();
  } catch (error) {
    console.error(error);
  }
}
