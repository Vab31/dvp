import React from 'react'
import Nav from '../components/nav'
import HeroSlider from '../components/slider'
import Reels from '../components/reels'
import Footer from '../components/footer'
import Whyitmatter from '../components/whyitmatter'
import Counter from '../components/countnumber'

export default function Page() {
  return (
    <div>
          <Nav/>
  <HeroSlider/>
  <Whyitmatter/>
  {/* <Counter/> */}
  <Reels/>
  <Footer/>
    </div>
  )
}
