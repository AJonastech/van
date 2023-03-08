import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Card( {van, classHolder}) {
    console.log(van)
    const [img, setImg]= useState("");
    const [name, setName]= useState(null);
    const [price, setPrice] =  useState("");
    const [type, setType] = useState("");

    useEffect(()=>{
       setTimeout(()=>{
        setImg(van.imageUrl);
        setName(van.name);
        setPrice(van.price);
        setType(van.type)
       },3*1000)
    },[])
    return (
        <div key={van.id} className='van-card'>
                     { img &&  <img src={img} alt="nothing-here"/>}  
                     {!img &&<Skeleton width="100%" height="70%"/> }
                      <div className='van-id'>
                        <div className='van-but'>
                        { name && <h2> {name} </h2>}{!name && <Skeleton count={1} width="100%" /> }
                        {price &&<p>${price} <p>/day</p></p> }{!price && <Skeleton count={1} width="100%" />}
                        </div>
                        <br/>
                      {type && <p className={classHolder} > <Link>{van.type}</Link></p>}{!type && <Skeleton count={1} width="100px" height="40px" />} 
                      </div>

                      </div>
    )
}

export default Card
