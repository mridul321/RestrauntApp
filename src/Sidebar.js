import React, {useState } from 'react';



const Sidebar = () => {

    const [toggle,setToggle] = useState(false);

    const onSideBar = () => {
        setToggle(!toggle);
       };

       const menubar = toggle === true? 'visible': '';  

    return (
        <div>
            <div className="ui grey top inverted attached menu">
                <button style = {{paddingLeft: "3vh"}}
                    onClick = {onSideBar} 
                    className="ui grey icon button">
                        <i className="bars icon"></i>
                </button>
            </div>

            <div className = {`ui ${menubar} sidebar inverted vertical menu`}>
                <button style = {{marginLeft: "23vh"}}
                    onClick = {onSideBar}
                    className = "ui grey icon button">
                        <i className="bars icon"></i>
                </button>
                <i className="huge grey utensils icon"/>

                <a  style={{marginTop: "15vh"}} className="item">
                     Introduction
                </a>
                <a className="item">
                    Report Issue
                </a>
                <a className="item">
                    Contact Us
                </a>
                <a style={{marginTop: "50vh"}} className="item">
                    <i className="envelope outline icon"/>
                        SendFeedback
                </a>
                

                </div>
            
        </div>

    );
};


export default Sidebar;