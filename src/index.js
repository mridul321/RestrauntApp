import React from 'react';
import ReactDOM from 'react-dom';
import RestrauntList from './RestrauntList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {

    state = { lat: null, long: null , error: ''};

   

   render(){

           

           const onDetectLocation = () => {
               window.navigator.geolocation.getCurrentPosition(
                   position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }), 
                   err => this.setState({error: err.message})
               );

              
             
   
              
           }

           if(this.state.error){
               alert("Please provide location "+ this.state.error);
           }

           if(this.state.lat){
              
           }
           
         
        
           return (
               <div>
                   <BrowserRouter>
                   <Switch>
                   <Route path= "/" exact component= {App}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>   
               
               <button 
                   className="ui green button"
                   onClick = {()=> onDetectLocation()}>Nearby Restraunts
                 </button>
                   
                </div>    
                   </Route>
                    <Route path="/nearby-restraunts" component = {()=> <RestrauntList latitude= {this.state.lat} /> }></Route>
                    </Switch>
                   </BrowserRouter>
               </div>
           );

       }


};



ReactDOM.render(
    <App />,
    document.querySelector("#root")
);






