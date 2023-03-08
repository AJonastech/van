import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

function Vans() {
    const [vanData, setVanData]= useState([]);
    useEffect(()=>{
       fetch( "http://localhost:4000/vans")
       .then(res => res.json())
       .then(data => setVanData(data))
       console.log(vanData);
    },[])
    
    return (
        <div>
            <Nav/>
            <section className='van-container'>
                <div className='van-holder'>
              {
            vanData.map((van)=>{
               return <div className='van-card'>
                      <img src={van.imageUrl} alt="nothing-here"/>
                      <div className='van-id'>
                        <div className='van-but'>
                        <h2>{van.name}</h2>
                        <p>${van.price}<p>/day</p></p>
                        </div>
                        <br/>
                        <Link>{van.type}</Link>
                      </div>

                      </div>
               
            })
              }
              </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Vans
