/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import {Link} from "react-router-dom"
import bgimg from '../Assets/Images/bg2.png'

function About() {
    return (
        <>
            <Nav/>
            <section className='about-container'>
           <div className='image-container'>
            <img src={bgimg} alt="This is a van image"/>
           
            <div className='about-page'>
                <h2 className='about-title'>
                Don’t squeeze in a sedan when you could relax in a van.
                </h2>
                <p className='about-info'>
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)
</p><br/><p>
Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <div className='about-end'>
                    <h3>
                    Your destination is waiting.
Your van is ready.
                    </h3>
                    <br/>
                    <br/>
                    <Link> Explore our vans</Link>
                </div>
                </div>
        
           </div>
           </section>
            <Footer/>
        </>
    )
}

export default About
