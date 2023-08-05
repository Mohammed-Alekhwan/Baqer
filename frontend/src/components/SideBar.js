import "./SideBar.css";
import React, { useState } from 'react';

const SideBar = (props) => {
  return (
    <div className="side-bar">
      <div className="side-bar-child" />

      {/* show in progress and completed Courses */}
      <ul className="my-courses">My Courses
      <li  onClick={()=>{
         props.showCompleted(false);
         props.showInprogress(true);
        } }>
          Inprogress 
        </li>
      
        <li onClick={()=>{
          props.showCompleted(true);
          props.showInprogress(false);
        } }>
          Completed
        </li>
       
      </ul>
      {/* ----------------------------------------- */}
<div></div>

      <ul className="meetings">Meetings
        <li ><button className="button">Schedule Meeting</button> </li>
        <li ><button className="button">Meeting Room</button> </li>

      </ul>
      {/* ----------------------------------------- */}
      <ul className="chat">chat
      <li ><button className="button">June Yung </button> </li>
        <li ><button className="button">Talia Khan</button> </li>
      </ul>
      {/* ----------------------------------------- */}
      <div className="log-out">
      <button className="Logout-button">Logout</button>
        </div>

    </div>
  );
};

export default SideBar;
