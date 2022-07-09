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

    console.log(products)



    const [externalApiShoes, setExternalApiShoes] = React.useState([]);
    


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