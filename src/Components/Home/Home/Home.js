import React from 'react'
import {Categorys } from '../../AllCategory/Category/Category'
import { AdPost } from '../AdPost/AdPost'
import { BannerSlid } from '../BannerSlid/BannerSlid'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import './Home.scss'

export const Home = () => {
    return (
        <div >
           <Header/>
           <BannerSlid/>
           <Categorys/>
           <AdPost/>
           <Footer/>
        </div>
    )
}
