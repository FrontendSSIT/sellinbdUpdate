import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './Loader.scss'


export const Loaders = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
    return (
       <section className="loader-section">
       <divs style={style}>
       <Loader
       type="BallTriangle"
       color="#00BFFF"
       height={100}
       width={100}
       timeout={3000} //3 secs
      
    />
       <p style={{color: "green"}}>Wait for Few Seconds...........</p>
       </divs>
       </section>
    )
}
