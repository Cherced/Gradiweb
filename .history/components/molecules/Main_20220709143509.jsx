import React from 'react'
import {ProductDescription} from '../atoms/main/ProductDescription'
import { SliderSmallCase } from '../atoms/main/SliderSmallCase'

export const Main = ({data}) => {
  const [allShoes, setAllShoes] = React.useState([])

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
        setAllShoes(data)
    }
    return () => mounted = false;

  },[])

  return (
    <>
    <main className="main">
        <section className="main__description--container">
        <ProductDescription/>
        </section>
        <section className="main__carrousel--container">
        <div className="SliderSmallCaseContainer">
        <div className="SliderSmallCase" id="sliderS">
          {
            allShoes.map((shoe) => {
              return(
                  <SliderSmallCase src={shoe.images} nameItem={shoe.title.substring(0,15)} />
              )
            })
          }
        </div>
      </div>
        </section>
    </main>
    </>  
    
  )
}

export const getServerSideProps = () => { 
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
