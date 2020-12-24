import React, { useEffect, useState } from 'react'
import {Categorys } from '../../AllCategory/Category/Category'
import { Loaders } from '../../Loader/Loaders'
import { AdPost } from '../AdPost/AdPost'
import {  Sliderss } from '../BannerSlid/BannerSlid'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { NavBars } from '../NavBars/NavBars'
import { SearchBox } from '../SearchBox/SearchBox'
import { ToastContainer, toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.scss'

export const Home = () => {
    const[clickSearch,setClickSearch]=useState('')
    const[searchValue,setSearchValue]=useState([])
    const[success,setSuccess]=useState(false)
    const [loader,setLoader]=useState(false)
    const handleSearchBox=(e)=>{
        const data=e.target.value;
        setClickSearch(data)    
        
      }
      const notify = () => {
        toast.error(" Sorry This Product Not Found !!!!", { delay: 50 });
    }
    const productNotify = () => {
        toast.success(" Product  Available !!!!", { delay: 50 });
    }
      const handleSearchClick=()=>{
        fetch(`https://sellinbd.com/api330088/product/searchBox.php?k1=${clickSearch}&page number=1&item_count=100`)
        .then(res=>{
            if(res.status===404){
                notify()
            }
            if(res.status===200){
                productNotify()
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
      useEffect(()=>{
      setLoader(true)
      },[])
    return (
        <section className="home-section">

       {
           loader?<div>
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
           </>
        }
           </div>:<Loaders/>
       }
       <ToastContainer 
       autoClose={5000}
  position="top-left"
  limit={1}
  transition={Flip}
  draggable={false}
  role="alert"
  className="positionset"
  />
        </section>
    )
}
