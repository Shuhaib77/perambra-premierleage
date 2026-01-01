import React from 'react'
import Header from '../../../common/layout/header/Header'
import Banner from './layout/banner/Banner'
import TournamentTeams from './layout/tournament/TournamentTeams'
import Schedule from './layout/schedule/Schedule'
import About from './layout/about/About'
import Contact from './layout/contact/Contact'
import Footer from '../../../common/layout/footer/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <Banner/>
        <TournamentTeams/>
        <Schedule/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home