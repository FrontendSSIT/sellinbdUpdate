import React from 'react'
import {Categorys } from '../../AllCategory/Category/Category'
import { AdPost } from '../AdPost/AdPost'
import { BannerSlid, Sliderss } from '../BannerSlid/BannerSlid'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { NavBars } from '../NavBars/NavBars'
import './Home.scss'

export const Home = () => {
    return (
        <div >
          <div className="headress">
          <Header/>
          </div>
           <NavBars/>
           <Sliderss/>
           <Categorys/>
           <AdPost/>
           <Footer/>
        </div>
    )
}
