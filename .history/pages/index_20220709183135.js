import React from 'react'
import { WelcomeAnimation } from '../components/WelcomeAnimation'
import { Header } from '../components/molecules/Header'
import { Main } from '../components/molecules/Main'
import { Footer } from '../components/molecules/Footer'

const Index = () => {
  const [starter, setStarter] = React.useState(false)

  React.useEffect(()=>{
    setTimeout(() => {
      setStarter(true)
    },4500)
  })

  return (
    <React.Fragment>
     {
      starter ? (<WelcomeAnimation/>) : (    
        <React.Fragment>
          <Header/>
          <Main/>
          <Footer/>
        </React.Fragment> )
    }</React.Fragment>
  )
}

export default Index