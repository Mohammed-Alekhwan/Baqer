import "./SideBar.css";


const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="pfp-container">
        <img src="pfp.png" className="pfp-image"/>
        <p className="pfp-name">Sara Doe</p>
        <a href="mailto:saradoe@gmail.com" className="email">saradoe@gmail.com</a>
      </div>

    <div className="sidebar-section">
      <p className="sidebar-section-title">My Courses</p>
      <a className="button-sidebar"> In progress <img src="right-arrow.png" width="8px" height="8px"/></a>
      <a className="button-sidebar" > Completed <img src="right-arrow.png" width="8px" height="8px"/></a>
    </div>

    <div className="sidebar-section">
      <p className="sidebar-section-title">Meetings</p>
      <a className="button-sidebar" > Schedule Meeting <img src="right-arrow.png" width="8px" height="8px"/></a>
      <a className="button-sidebar" > Meeting Room<img src="right-arrow.png" width="8px" height="8px"/></a>
    </div>


    <div className="sidebar-section">
      <p className="sidebar-section-title">Chat</p>
      <a className="button-sidebar"> June Yung <img src="right-arrow.png" width="8px" height="8px"/></a>
      <a className="button-sidebar" > Talia Khan <img src="right-arrow.png" width="8px" height="8px"/></a>
    </div>

    <a className="logout"> <img src="logout.png" />Log out</a>
    </div>
  );
};

export default SideBar;
