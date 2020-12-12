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
       height={200}
       width={200}
       timeout={3000} //3 secs
      
    />
       <p>Loading...........</p>
       </divs>
       </section>
    )
}
