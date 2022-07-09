import React from 'react'
import {getProducts} from '../../../db/data.cherced'
import {getShoes} from '../../../db/data.cherced'

export const ProductDescription = () => {
    const productsFail = getProducts();
    console.log("bad Fetch request", productsFail); // respuesta da 200, pero no se usar graphql,

    const [products, setProducts] = React.useState([])
   
    React.useEffect(() => {
      let mounted = true;
      if (mounted) {
        window.fetch('/api/data').then(res => res.json()).then(data => {
          setProducts(data) // intento de clonar la data del endpoint, tambien fracaso por errores de backend paradojicamente xD 
        })
      }
      return () => mounted = false;
    }, [])




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

    const mainItem = externalApiShoes[3];
    


  return (
    <React.Fragment>
    <section className="main-product-container">
  <div className="pinky-background" />
  <h2 className="main-price">$ {mainItem.price}</h2>
  <h1 className="main-title">{mainItem.name} <span>reference</span></h1>
  <div className="main-rank">
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
    <span className="star-icon" />
  </div>
  <article className="main-product-description">
    <p>{mainItem.description}</p>
    
  </article>
  <a className="cart-button" href="www.google.com">Add to Cart</a>
  <div className="main-product-picture">
    <div className="main-picture" />
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