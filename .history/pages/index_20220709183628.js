import React from 'react'
import { IntroAnimationStart } from '../components/WelcomeAnimation'
import { Header } from '../components/molecules/Header'
import { Main } from '../components/molecules/Main'
import { Footer } from '../components/molecules/Footer'

const Index = () => {
  const [starter, setStarter] = React.useState(true)

  React.useEffect(()=>{
    setTimeout(() => {
      setStarter(true)
    },4500)
  })

  return (
    <React.Fragment>
     {
      starter ? (<IntroAnimationStart/>) : (    
        <React.Fragment>
          <Header/>
          <Main/>
          <Footer/>
        </React.Fragment> )
    }</React.Fragment>
  )
}

export default Index