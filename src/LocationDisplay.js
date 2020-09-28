import React from 'react';
import axios from 'axios';
import RestrauntList from './RestrauntList';



class LocationDisplay extends React.Component{

    state = { lat: null, long: null , error: ''};
    state = { cuisines: [] };

    onSearchSubmit = async() => {
        const response = await axios.get('https://developers.zomato.com/api/v2.1/geocode',{
            params: {
                lat: this.state.lat,
                long: this.state.long,
            },
            headers: {
                'user-key' : '39ecaeb95c92dc09d585ae49a36cdaee' 
            }
        });

        this.setState({cuisines: response.data});
    }

   

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }), 
            err => this.setState({error: err.message})
        );
        this.onSearchSubmit();
       
     
    }



   

    


    render(){

       if(this.state.error){
           alert("An error occured: "+ this.state.error);
           window.location = "/";
       }

       if(!this.state.error && !this.state.lat){
           return (
            <div className="ui active dimmer">
                <div className="ui text loader">Fetching Restraunts,Cuisines and More...</div>
            </div>
           );
       }

      

     
        
    return (
        <div className="ui container" style={{marginTop: "10px"}}>
           
            <RestrauntList restraunts= {this.state.cuisines} />
        </div>
    );


    };



}

export default LocationDisplay;