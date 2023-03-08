/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Card from '../components/Card'

function Vans() {
    const [vanData, setVanData]= useState([]);
    const fetchData = async () => {
      const response = await fetch( "https://json-mock-czwb.onrender.com/vans")
      const data = await response.json()
          setVanData(data)
    
      
    }

    useEffect(() => {
      fetchData()
       
    }, [])
    

    var classHolder;
    return (
        <div>
            <Nav/>
            <section className='van-container'>
            <h2 className='van-page-title'>Explore Our Van Options</h2>
            <div className='filter-container'>
             <Link to="/vans/filter/simple"> Simple</Link>
             <Link  to="/vans/filter/rugged"> Rugged</Link>
             <Link  to="/vans/filter/luxury">Luxury</Link>
             <Link to="/vans">Clear Filter</Link>
            </div>
                <div className='van-holder'>
               
              {vanData.map((van)=>{
             
              if (van.type==="simple"){
                    classHolder = "orange"
              }else if(van.type==="rugged"){
                  classHolder= "green"
              }else{
                  classHolder="black";
              }
               return <Card key={van.id} van={van} classHolder={classHolder}/>
                 
            })
              }
             
              </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Vans
