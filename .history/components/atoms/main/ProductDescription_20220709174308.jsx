import React from 'react'
import {getProducts} from '../../../db/data.cherced'
import {getShoes} from '../../../db/data.cherced'

export const ProductDescription = () => {
    
  React.useEffect(()=>{
    (async ()=>{
      getProducts().then((data) =>{
        console.log(data)
      });
     
    })
   
  })

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


// peticion desde el server side de next, tambien fallo, Conclusion debo aprender GraphQL
export async function getStaticProps()  {
  try {
    const res = await fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js",{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  });
    if (res.status !== 200){
      throw new Error ("error", res.statusText)
    }  else {
      const data = await res.json();
      console.log("desde props", data)
    return{
      props:{
        data
      }
    }

    }
    

  } catch (error) {
    console.error(error);
  }
}