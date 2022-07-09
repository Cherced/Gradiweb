import React from 'react'
import {getShoes} from '../../../db/data.cherced'

export const ProductDescription = () => {
    
    const [externalApiShoes, setExternalApiShoes] = React.useState([]);

    React.useEffect(() => {
      let mounted = true;
      if (mounted) {
        getShoes().then((data)=>{
          setExternalApiShoes(data)
        })
      }
      return () => mounted = false;

    },[])

    console.log(externalApiShoes) // success api Calll!!! 

    const mainItem = externalApiShoes[16];
    


  return (
    <React.Fragment>
    <section className="main-product-container">
  <div className="pinky-background" />
  <h2 className="main-price">$ {mainItem?.price}</h2>
  <h1 className="main-title">{mainItem?.title} <br/> <span>Most Popular Shoes</span></h1>
  <div className="main-rank">
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
  </div>
  <article className="main-product-description">
    <p>{mainItem?.description}</p>    
  </article>
  <a className="cart-button" href="www.google.com">Add to Cart</a>
  <div className="main-product-picture">
    <img src={mainItem?.images} className="main-picture" alt={mainItem?.title} />
  </div>
</section>
    </React.Fragment>    
  )
}