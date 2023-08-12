import "./Courses.css";
import { useEffect, setWorkouts, useState } from "react";
const Courses = (props) => {
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
    <div className="courses">

<p>{props.showCompleted? "completed courses":""}</p>
<p>{props.showInprogress?"Inprogrss coursdes":""}</p>
<div class="flex-container">
 
{Workouts && Workouts.map((workouts) =>(
          <span className= "courses-box" key={workouts.id} > 
        
          <img  className="img" src={workouts.img} /> <p className="title">{workouts.title}</p> <p>{workouts.description} </p> </span>
          

        ))}
        
        </div>
        
             
        
      {/* <div className="course12">
        <div className="course-1">
          <img className="course-1-child" alt="" src="/rectangle-24@2x.png" />
          <div className="course1">
            <div className="title">
              <div className="uiux-full-course">UI/UX Full Course</div>
              <div className="an-intro-course">
                An intro course to UI/UX design
              </div>
            </div>
            <div className="complete-progress">
              <div className="progress">
                <div className="completed">Completed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="course-1">
          <img className="course-1-child" alt="" src="/rectangle-241@2x.png" />
          <div className="course1">
            <div className="title">
              <div className="uiux-full-course">{`Intro to Java `}</div>
              <div className="an-intro-course">Learn the basics of Java</div>
            </div>
            <div className="complete-progress">
              <div className="progress1">
                <div className="completed">50% Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course34">
        <div className="course-1">
          <img className="course-1-child" alt="" src="/rectangle-242@2x.png" />
          <div className="course1">
            <div className="title">
              <div className="uiux-full-course">Intro to Cyber Security</div>
              <div className="an-introductory-course">
                An introductory course into the fundamentals of cyber security.
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-wrapper">
                <div className="completed">30% Progress</div>
              </div>
            </div>
          </div>
        </div>
        <div className="course4">
          <img className="course-1-child" alt="" src="/rectangle-243@2x.png" />
          <div className="course1">
            <div className="title">
              <div className="uiux-full-course">{`Google Analytics `}</div>
              <div className="an-intro-course">
                Learn how to use google analytics
              </div>
            </div>
            <div className="complete-progress">
              <div className="progress1">
                <div className="completed">80% Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Courses;