/* eslint-disable no-cond-assign */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import bgImg from '../Assets/Images/bg.png'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

function Vandetails() {
    const [vanDetail, setVanDetail]= useState({});
    const id = useParams();
    useEffect(()=>{
        fetch( "https://json-mock-czwb.onrender.com/vans/"+id.id)
        .then(res => res.json())
        .then(data => setVanDetail(data))
        console.log(vanDetail);
     },[])
     var color;
     if (vanDetail.type==="simple"){
        color = "orange";
     }else if(vanDetail.type="rugged"){
        color = " green"
     }else{
        color ="black"
     }
    return (
        <>
            <Nav/>
            <section className='vandetail-body'>
           <div className='vandetail-card'>
           <div className='vandetail-img'>
                <img src={vanDetail.imageUrl}/>
            </div>
           
            <div className='vandetail-flex'>
            <div className='vanDetail-type'>
               <p className={color}>{vanDetail.type}</p>
            </div>
                <h1 className='vandetail-title'> {vanDetail.name}</h1>
                <p><strong>${vanDetail.price}</strong>/day</p>
                <p className='vandetail-text'>
                    {vanDetail.description}
                </p>
                <div className='vandetail-btn'>
                    <Link> Rent This Van</Link>
                </div>
            </div>
           </div>
            <Footer/>
        </section>
        </>
    )
}

export default Vandetails
