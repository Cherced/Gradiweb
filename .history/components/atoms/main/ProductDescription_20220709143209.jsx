import React from 'react'
import {getProducts} from '../../../db/data.cherced'
import {getShoes} from '../../../db/data.cherced'

export const ProductDescription = ({data}) => {
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
          setExternalApiShoes(data)
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
  <h1 className="main-title">{mainItem?.title} <br/> <span>Most Popular</span></h1>
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


export async function getServerSideProps () { 
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0e0a5a5c39mshc6de94e22b46be3p11f8f8jsn79d12c5e06e5',
        'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
    }
};
    try {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories/4/products', options)
        if (res.status !== 200) throw new Error(res.statusText)
        const data = res.json()
        console.log(data)
        return {
          pros: {
            data 
          }
        }

    } catch (error) {
        console.log(error)
    }
}


/* 
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
} */