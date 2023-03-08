import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom"
import { useEffect, useState} from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Vanfilter() {
    const param = useParams();
    const [vanData, setVanData]= useState([]);
    useEffect(()=>{
       fetch( "https://json-mock-czwb.onrender.com/vans")
       .then(res => res.json())
       .then(data => setVanData(data))
       console.log(vanData);
    },[vanData])
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
               
              {
            vanData.map((van)=>{
             
              if (van.type==="simple"){
                    classHolder = "orange"
              }else if(van.type==="rugged"){
                  classHolder= "green"
              }else{
                  classHolder="black";
              }
              if (van.type===param.type){
               return <Card van={van} classHolder={classHolder}/>              }
            })
              }
              </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Vanfilter
