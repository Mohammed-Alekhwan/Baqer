import "./SideBar.css";
import React, { useState } from 'react';

const SideBar = (props) => {
  return (
    <div className="side-bar">
      

      {/* --------------------My Courses--------------------- */}
      <ul  className="my-courses">My Courses

      <li> <button className="button" onClick={()=>{
         props.showCompleted(false);
         props.showInprogress(true);
        } }>
          Inprogress 
          </button>
        </li>
        <li> <button className="button" onClick={()=>{
          props.showCompleted(true);
          props.showInprogress(false);
        } }>
          Completed
          </button>
        </li>
       
      </ul>
      {/* --------------------Meetings--------------------- */}
<div></div>

      <ul className="meetings">Meetings
        <li ><button className="button">Schedule Meeting</button> </li>
        <li ><button className="button">Meeting Room</button> </li>

      </ul>
      {/* --------------------chat--------------------- */}
      <ul className="chat">chat
      <li ><button className="button">June Yung </button> </li>
        <li ><button className="button">Talia Khan</button> </li>
      </ul>

      {/* ---------------------Logout-------------------- */}
      <div className="log-out">
      <button className="Logout-button">Logout </button>
        </div>

    </div>
  );
};

export default SideBar;
