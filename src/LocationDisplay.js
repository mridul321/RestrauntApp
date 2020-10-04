import React from 'react';
import API from './API';



class LocationDisplay extends React.Component{

    state = { lat: null, long: null , error: ''};
  

    
 

    componentDidMount() {
        
            window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }), 
            err => this.setState({error: err.message})
        );
       
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
       <API latitude = {this.state.lat} longitude= {this.state.long}/>
    );


    };



}

export default LocationDisplay;