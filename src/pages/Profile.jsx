import React, { useState } from 'react';
import BackButton from '../Components/backButton';
import {School,TrendingUp,Star,AccountBox} from '@material-ui/icons';

import './Profile.css'

function Profile()
{
  const [touch,setTouch]=useState(1);
  return(
    <div
    className="container"
    style={{ backgroundImage:`url(/images/mG.jpg)`}}>
    
    <div className="centerP"><BackButton></BackButton></div>
    <div className="container2">
        <div className="container3">

          <div 
           className="container4" 
           id="pro"
           style={{backgroundColor:touch===1?"white":"transparent"}}
           onClick={()=>{
             setTouch(1);
           }}>
            <AccountBox style={{ fontSize: 100, margin:"auto",marginTop:"0px",marginBottom:"0px",color:"#E31837",}}></AccountBox>
            <h3 style={{margin:"auto" ,marginTop:"0px",marginBottom:"0px"}}>Profile</h3>
          </div>

          <div 
           className="container4"
           id="edu"
           style={{backgroundColor:touch===2?"white":"transparent"}}
           onClick={()=>{
            setTouch(2);
           }}>
            <School style={{ fontSize: 100, margin:"auto",marginTop:"0px",marginBottom:"0px",color:"#E31837",}}></School>
            <h3 style={{margin:"auto" ,marginTop:"0px",marginBottom:"0px"}}>Education</h3>
          </div>

          <div 
           className="container4"
           id="exp"
           style={{backgroundColor:touch===3?"white":"transparent"}}
           onClick={()=>{
            setTouch(3);
           }}>
            <Star style={{ fontSize: 100, margin:"auto",marginTop:"0px",marginBottom:"0px",color:"#E31837",}}></Star>
            <h3 style={{margin:"auto" ,marginTop:"0px",marginBottom:"0px"}}>Experince</h3>
          </div>

          <div 
           className="container4"
           id="skill"
           style={{backgroundColor:touch===4?"white":"transparent"}}
           onClick={()=>{
            setTouch(4);
           }}>
            <TrendingUp style={{ fontSize: 100, margin:"auto",marginTop:"0px",marginBottom:"0px",color:"#E31837",}}></TrendingUp>
            <h3 style={{margin:"auto" ,marginTop:"0px",marginBottom:"0px"}}>Skills</h3>
          </div>
       
       
        </div>
        
        {touch===1&&
          <div className="pr1">
            <div className="pr2" style={{ backgroundImage:`url(/images/main.png)`}}></div>
             <div className="pr3">
               <p className="bio">
                 <b>Name:-</b>Shubkarman Singh Sandhu<br/>
                 <b>Mobile:-</b>6474000120<br/>
                 <b>Email:-</b>shubhkarman951@gmail.com<br/>
                 <b>Current Address:-</b>74 Apple Valley Way, Brampton, Canada<br/>
                 <b>Home Town:-</b>Ferozeper, Punjab, India<br/>
                 <b>Hobbies:-</b>Gaming, Sports(Cricket, Football), Movies/Tv-Shows<br/>
               </p>
             </div>
          </div>
        }

        {touch===2&&
          <div>
              <div className="york">
                <div className="york1"  style={{ backgroundImage:`url(/images/york.png)`}}></div>
                <div className="york2">
                  <p>
                    <b>York University, Toronto<br/>
                      Bachelor of Computer Science (2019-2021)<br/>
                    <i>GPA 6.4 (9.0 Scale)</i></b><br/>
                      •	Software Design Project: Parking Ticket System for Toronto using Software Design patterns and techniques (language: Java)<br/>
                      •	HTML, CSS, Javascript, C, Java, Linux, Data Structures, Software Design<br/>
                      •	Meta-algorithm techniques, Computer-logic, Computation Theory<br/>  
                      •	Computer Networks<br/>  
                  </p>
                </div>
              </div>
              <div className="york">
            <div className="york1"  style={{ backgroundImage:`url(/images/cu.png)`}}></div>
            <div className="york2">
              <p>
                <b>Chikara University, India<br/>
                    Bachelor of Computer Science Engineering (2017-2019)<br/>
                <i>GPA 9.2(10 Scale)</i></b><br/>
                    •	Software Documentation (SRS): Blood Donation Management Software<br/>  
                    •	Arduino Based Project: A Sun Tracking System to increase the efficiency of Solar panel<br/>
                    • 2nd Year Class Rank:1<br/>
                    • HTML, CSS, Javascript, C, C++, Java, Linux , SQL, Database Theory<br/>

              </p>
            </div>
          </div>
          </div>
        }

          {touch===3&&
          <div className="pr1">
          <div className="pr2" style={{ backgroundImage:`url(/images/job.png)`}}></div>
             <div className="pr3">
            <p className="bio"><b>Aavenir Inc,India</b><br/>                                                                                                                                                                                                                                                                
               Front End Developer (Trainee)<br/> 
               •	Developed website application using HTML/CSS/JavaScript<br/>  
               •	Maintenance and upgradation of pre-existing websites<br/> 
               •	Learned Node.j/React for upgradation<br/>  
            </p>
             </div>      
          </div>
          }

          {touch===4&&
          <div className="sk1">

            <div className="sk2">
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/node.png)`}}></div>
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/react.png)`}}></div>
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/react-native.png)`}}></div>
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/sql.png)`}}></div>
            </div>

            <div className="sk2">
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/c.png)`}}></div>
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/c++.png)`}}></div>
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/java.svg)`}}></div>
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/eclipse.png)`}}></div>
            </div>
            
            <div className="sk2">
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/html.png)`}}></div>
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/css.svg)`}}></div>
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/js.png)`}}></div>
              <div className="sk3" style={{ backgroundImage:`url(/images/skill/vs.png)`}}></div>
            </div>
          </div>
          }

            
            
          
      

        
    </div>

    </div>
  )
}

export default Profile;