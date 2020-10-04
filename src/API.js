
import React,{useState, useEffect } from 'react';
import axios from 'axios';
import RestrauntList from './RestrauntList';



const API = ({ latitude, longitude }) => {


    console.log(latitude);
    console.log(longitude);

    const[cuisines,setCuisines] = useState([]);

    useEffect(()=> {

        const onSearchSubmit = async() => {
            await axios.get('https://developers.zomato.com/api/v2.1/geocode',{
                params: {
                    lat: latitude,
                    long: longitude,
                },
                headers: {
                    'user-key' : '39ecaeb95c92dc09d585ae49a36cdaee',
                    "content-type": "application/json" 
                }
            }).then(response => {
                setCuisines(response.data.nearby_restaurants);
            }).catch(err => {
                alert("Could not load restraunts, Please Try again! "+ err);
            });
    
          
        };
        onSearchSubmit();


    },[latitude,longitude]);

    

   

    return (
        <div>
           <RestrauntList list = {cuisines} />
        </div>
    );
};


export default API;