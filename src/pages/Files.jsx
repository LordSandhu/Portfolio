import React from 'react';
import './Files.css'
import BackButton from '../Components/backButton';

 
 
function Files(){
    return(
        <div className="container"
        style={{ backgroundImage:`url(/images/wip.png)`}}>
        <div className="centerPro"><BackButton></BackButton></div>
        <div className="extra"></div>
        </div>
        
       )

}
export default Files;