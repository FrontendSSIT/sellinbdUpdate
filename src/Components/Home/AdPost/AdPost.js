import { Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Adpost.scss'

export const AdPost = () => {
    return (
        
            <section className="Adpost">
                <Container className="text-center">
                    <h2>Want to sell something?</h2>
                    <div><Link to="/Adpost">Post your ad now!</Link></div>
                </Container>
            </section>
        
    )
}
