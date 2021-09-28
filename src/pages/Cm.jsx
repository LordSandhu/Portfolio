import React, { useState } from 'react';
import BackButton from '../Components/backButton';
import { PhoneAndroid} from '@material-ui/icons';
import './Cm.css'

function Cm()
{
    var [email,setEmail]=useState("");
    var [num,setNum]=useState("");
    const copyNumber = async () => {
        await navigator.clipboard.writeText("6474000120");
        setNum(1);
        setTimeout(() => {  setNum("")}, 2000);
        ;
      }
      const copyMail = async () => {
        await navigator.clipboard.writeText("shubhkarman951@gmail.com");
        setEmail(1);
        setTimeout(() => {  setEmail("")}, 2000);
        ;
      }
    return(
        <div
        className="container"
        style={{ backgroundImage:`url(/images/backG2.png)`}}>
        <div className="center"><BackButton></BackButton></div>

        <div className="containerX">
        
        <div 
         className="box" 
         onClick={copyNumber}
         style={{ backgroundColor:"white"} }> 
         <PhoneAndroid style={{ fontSize: 40, margin:"auto", marginRight:"0px",marginLeft:"2px" } } />
         <h1>:-6474000120</h1>
         </div>
         {num&&<p className="alert">Number copied!</p>}
    
        <div 
         className="box" 
         onClick={copyMail}
         style={{ 
             backgroundImage:`url(https://www.citypng.com/public/uploads/preview/-11597284657quwxwsmaor.png)`,
             backgroundColor:"white"}}> </div>
        
        {email&&<p className="alert">Email copied!</p>}
        <div 
         className="box"
         onClick={()=>{window.open("https://www.facebook.com/shubh.k.singh.5")}} 
         style={{ 
             backgroundImage:`url(http://seaiif.com/wp-content/uploads/sites/21/2016/05/Facebook-bw-1024x360.png)`,
             backgroundColor:"white"}}> </div>

        <div 
         className="box"
         onClick={()=>{window.open("https://www.instagram.com/sks_sandhu/")}} 
         style={{ 
             backgroundImage:`url(https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1)`,
             backgroundColor:"white"}}> </div>

        <div 
         className="box"
         style={{ 
             backgroundImage:`url(https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png)`,
             backgroundColor:"white"}}>  </div>
        
        <div 
         className="box"
         onClick={()=>{window.open("https://www.linkedin.com/in/shubhkarman-singh-sandhu-589b29208/")}} 
         style={{ 
             backgroundImage:`url(https://blog.waalaxy.com/wp-content/uploads/2021/01/1497016117-300x74.png)`,
             backgroundColor:"white"}}>  </div>

    
        </div>
        
        

        
        </div>
    )
}
export default Cm;