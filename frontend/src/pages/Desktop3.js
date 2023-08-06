import Courses from "../components/Courses";
import SideBar from "../components/SideBar";
import FooterIcon from "../components/FooterIcon";
import MainHeader from "../components/MainHeader";
import ProgressContainer from "../components/ProgressContainer";
import Achievments from "../components/Achievments";
import WelcomeContainer from "../components/WelcomeContainer";
import PopularCoursesContainer from "../components/PopularCoursesContainer";
import "./Desktop3.css";
import { useEffect, setWorkouts, useState } from "react";

const Desktop3 = () => {
  const [showCompleted,setShowComplated] = useState(true);
  const [showInprogress,setInprogress] = useState(true);
  const [Workouts, setWorkouts]= useState(null)

  useEffect(()=> {
    const fetchWorouts = async () => {
      const response = await fetch('/api/courses')
      const json = await response.json()

      if (response.ok){
        setWorkouts(json)
      }
    }
    fetchWorouts() 
  }, [])


  return (
    <div className="desktop-3">
      <Courses showInprogress={showInprogress} showCompleted={showCompleted} />
      <SideBar showCompleted={setShowComplated} showInprogress={setInprogress} />
      <ProgressContainer />
      <Achievments />
      <WelcomeContainer />
      <PopularCoursesContainer />
      <div className="workouts">
        {/* {Workouts && Workouts.map((workouts) =>(
          <p key={workouts.id} > {workouts.title}</p>

        ))} */}
      </div>
    </div>
  );
};

export default Desktop3;
