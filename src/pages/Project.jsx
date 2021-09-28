import React from 'react';
import './Project.css'
import BackButton from '../Components/backButton';

 
 
function Project(){
   return(
    <div className="container"
    style={{ backgroundImage:`url(/images/wip.png)`}}>
        <div className="centerPro"><BackButton></BackButton></div>
        <div className="extra"></div>
    </div>
    
   )
}
export default Project;