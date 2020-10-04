import React, { useState } from 'react';
import { Rating } from 'semantic-ui-react';


const RestrauntCard = props => {
        const stat = props.status === 1? 'Now Delivering': 'Closed';
        const icon = props.status === 1? 'green':'red';
        const [hover,setHover] = useState('');
        
        return (
            
            <div className = "ui special cards">
                <div className="card">
                    <div
                        onMouseEnter = {() => setHover('active')} 
                        onMouseLeave = {() => setHover('')}
                        className="blurring dimmable image">
                        <div className={`ui ${hover} dimmer`}>
                            <div className="content">
                                <div className="center">
                                    <a href={props.order} className="ui inverted button">Order</a>
                                </div>
                            </div>
                        </div>
                        <img alt="" src= {props.image} />
                    </div>
                    
                    <div className="content">
                        <div className="left aligned header">{props.title}</div>
                        <div style={{marginRight: "24vh"}}><Rating icon = "star" defaultRating={props.rating} maxRating="5"/></div> 
                            <div className="meta">
                           
                                <span style={{textAlign: "left"}} className="left floated">{props.cuisines}</span>
                            </div>
                            <div className="ui hidden divider"></div>
                            <div className="left aligned description">
                               <i className="map marker alternate icon"/> 
                                {props.address}
                            </div>    
                    </div>

                    <div className="extra content">
                        <span className="right floated">
                            <a className="ui primary button" href= {props.menu}>Menu</a>
                        </span>
                        <span className="left floated">
                            <i className={`${icon} circle icon`}></i>
                                {stat}
                        </span>
                    </div>

                </div>
            </div>
        );
};


export default RestrauntCard;