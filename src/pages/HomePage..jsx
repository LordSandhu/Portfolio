import React, { useState } from 'react';
import './HomePage.css'
import { AccountBox,Archive,Message, AssignmentTurnedIn} from '@material-ui/icons';
import { useHistory} from 'react-router-dom';


function HomePage(props) {

  const [link,setLink]=useState("/images/main.png");
  let history = useHistory();

  const pushProfile = () => {
    history.push('Profile')
  }
  const pushProjects = () => {
    history.push('Projects')
  }
  const pushCm = () => {
    history.push('Cm')
  }
  const pushFiles = () => {
    history.push('Files')
  }
  
    return (
      <
      div className="container"
      style={{ backgroundImage:`url(/images/backG.png)`}}>
      <div class="donut-ring" >

        <div 
         title="Profile"
         className="ring red" 
         onClick={pushProfile}
         onMouseEnter={()=>{
          setLink("/images/profile.gif")
         }}
           
         onMouseLeave={()=>{
          setLink("images/main.png")
         }}>

            <AccountBox style={{ fontSize: 80, marginBottom: 20 } } /></div>

        <div 
         title="Projects"
         className="ring blue" 
         onClick={pushProjects}
         onMouseEnter={()=>{
          setLink("/images/project.gif")
         }}
           
         onMouseLeave={()=>{
          setLink("images/main.png")
         }}>

            <AssignmentTurnedIn style={{ fontSize: 80, marginBottom: 20 } } /></div>

        <div 
         title="Contact Me"
         className="ring orange" 
         onClick={pushCm}
         onMouseEnter={()=>{
          setLink("/images/Cm.gif")
         }}
           
         onMouseLeave={()=>{
          setLink("images/main.png")
         }}>

            <Message style={{ fontSize: 70, marginTop: 35,marginBottom:10 } } /></div>

        <div 
         title="Files"
         className="ring green" 
         onClick={pushFiles}
         onMouseEnter={()=>{
          setLink("/images/files.gif")
         }}
           
         onMouseLeave={()=>{
          setLink("images/main.png")
         }}>

            <Archive style={{ fontSize: 80, marginTop: 35, marginBottom:10} } /></div>

        <div 
         className="cutout" 
         onClick={()=>{console.log("whites")}}
         > <img src={link}  alt="Logo" width="100%" height="100%"/></div>

        </div>
        </div>
        
    )
  }
   
  export default HomePage;
  