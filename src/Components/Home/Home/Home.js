import React, { useState } from 'react'
import {Categorys } from '../../AllCategory/Category/Category'
import { AdPost } from '../AdPost/AdPost'
import {  Sliderss } from '../BannerSlid/BannerSlid'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { NavBars } from '../NavBars/NavBars'
import { SearchBox } from '../SearchBox/SearchBox'
import './Home.scss'

export const Home = () => {
    const[clickSearch,setClickSearch]=useState('')
    const[searchValue,setSearchValue]=useState([])
    const[success,setSuccess]=useState(false)
    const handleSearchBox=(e)=>{
        const data=e.target.value;
        setClickSearch(data)    
        
      }
      const handleSearchClick=()=>{
        fetch(`https://sellinbd.com/api330088/product/searchBox.php?k1=${clickSearch}&page number=1&item_count=100`)
        .then(res=>{
            if(res.status===200){
                setSuccess(true)
                res.json()
                .then(result=>{
                    if(result){
                        setSearchValue(result.records)
                    }
            })
            }
            
        })
      }
    return (
        <div >

        {
            searchValue.length>10 ? <SearchBox searchValue={searchValue} success={success}  handleSearchBox={handleSearchBox} handleSearchClick={handleSearchClick}  setSearchValue={setSearchValue}/>:
          <>
          <div className="headress">
         
          <Header/>
          </div>
           <NavBars handleSearchBox={handleSearchBox} clickSearch={clickSearch} handleSearchClick={handleSearchClick} setSearchValue={setSearchValue} />
           <Sliderss/>
           <Categorys />
           <AdPost/>
           <Footer/>
           </>
        }
        </div>
    )
}
