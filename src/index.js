import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import LocationDisplay from './LocationDisplay';
import Sidebar from './Sidebar';
import 'semantic-ui-css/semantic.min.css'
import "semantic-ui-css/components/rating.css";

  

const pageOne = () =>{

   return(
            <div style={{backgroundColor: "lightgrey"}}>
                <Sidebar />
                <div className="pusher">

                <div className="ui vertical divider">.</div>
                <img
                alt= "error loading"
                style= {{paddingTop: "30vh", marginLeft: "50vh"}} 
                className="ui medium left floated circular image" 
                src ="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&w=1000&q=80"/>

             
                
                <h1 style={{fontSize: "50px",fontFamily: "cursive" ,paddingTop: "40vh", paddingLeft: "115vh"}}> Hey Foodie!</h1>
                <a style={{marginLeft: "30vh", marginTop: "10vh", marginBottom: "1vh"}} className="ui green button" href="/nearby-restraunts">
                    <i className="white map marker alternate icon"/>
                        Nearby Restraunts
                </a>

                </div>
                
                 
            
            </div>
             
           
        
    
    ) ;
  
};

const App = () => {

 return (
        <BrowserRouter>
            <Route path="/" exact component = {pageOne}/>

          
            <Route path = "/nearby-restraunts" component = {LocationDisplay}/>
        </BrowserRouter>
 );
};


ReactDOM.render(
    <App />,
    document.querySelector("#root")
);






