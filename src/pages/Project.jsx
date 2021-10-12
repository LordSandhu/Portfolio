import React,{useState} from 'react';
import './Project.css'
import BackButton from '../Components/backButton';
import {ArrowBackIosOutlined,ArrowForwardIosOutlined} from '@material-ui/icons';

 
 
function Project(){
    const portfolio=["/images/portfolio/p1.png","/images/portfolio/p2.png","/images/portfolio/p3.png"]
    const javaP=["/images/JavaP/j1.png","/images/JavaP/j2.png","/images/JavaP/j3.png","/images/JavaP/j4.png"]
    const [s,setS]=useState(1);
    const [p,setP]=useState(0);
    
   return(
    <div className="container"
     style={{ backgroundImage:`url(/images/pro.png)`}}>
        <div className="centerPro"><BackButton></BackButton></div>
        <div className="extra">
            <div className="selection">
                <div className="selector" onClick={()=>{setS(1); setP(0)}}>Portfolio</div>
                <div className="selector" onClick={()=>{setS(2); setP(0)}}>Express Parking</div>
                <div className="selector" onClick={()=>{setS(3); setP(0)}}>Grocery Expiry Index</div>
                <div className="selector" >More Comming</div>
            </div>

            { s===1&&<div className="project">
                <div className="h" style={{backgroundColor:"#FF5757"}}>
                    <span className="hText">Languages:</span> <span className="span1">React</span>,<span className="span1">CSS</span><br/>
                    <span className="hText">IDE and Plugins:</span> <span className="span1">Visual Studio Code</span>,<span className="span1">Axios</span>,<span className="span1">Bootstrap</span><br/>
                    <span className="hText">Platform:</span><span className="span1">Web</span><br/>
                    <span className="hText">Link:</span><a href="https://portfolio-rho-fawn.vercel.app/" target="_blank"><span className="span1">Web</span></a><br/>
 
               
                </div>

                <div className="b">
                 <div className="cricle">
                 <ArrowBackIosOutlined 
                  onClick={()=>{p===0?setP(2):setP(p-1)}}
                  style={{fontSize:"80",color:"white", marginRight:"10px"}}>
                 </ArrowBackIosOutlined>
                 </div>
                 <div className="b1" style={{ backgroundImage:`url(${portfolio[p]})`}}></div>
                 <div className="cricle">
                 <ArrowForwardIosOutlined 
                  onClick={()=>{p===2?setP(0):setP(p+1)}}
                  style={{fontSize:"80",color:"white" ,marginLeft:"10px"}}>
                 </ArrowForwardIosOutlined> 
                 </div>
                </div>
            </div>}

            { s===2&&<div className="project">
                <div className="h" style={{backgroundColor:"#A891D4"}}>
                    <span className="hText">Languages:</span> <span className="span1">Java</span>,<span className="span1">Java Modeling Language </span><br/>
                    <span className="hText">IDE and Plugins:</span> <span className="span1">Eclipse</span>,<span className="span1">Window Builder</span>,<span className="span1">EclEmma Code Coverage</span><br/>
                    <span className="hText">Platform:</span><span className="span1">Windows</span>,<span className="span1">Linux</span><br/>
                    <span className="hText">Link:</span><a href="https://github.com/LordSandhu/ParkingTicket-Project-Java" target="_blank"><span className="span1">GitHub</span></a><br/>
    

                </div>
                <div className="b">
                 <div className="cricle">
                 <ArrowBackIosOutlined 
                  onClick={()=>{p===0?setP(2):setP(p-1)}}
                  style={{fontSize:"80",color:"white", marginRight:"10px"}}>
                 </ArrowBackIosOutlined>
                 </div>
                 <div className="b1" style={{ backgroundImage:`url(${javaP[p]})`}}></div>
                 <div className="cricle">
                 <ArrowForwardIosOutlined 
                  onClick={()=>{p===3?setP(0):setP(p+1)}}
                  style={{fontSize:"80",color:"white" ,marginLeft:"10px"}}>
                 </ArrowForwardIosOutlined> 
                 </div>
                </div>
            </div>}

            { s===3&&<div className="project">
                <div className="h" style={{backgroundColor:"#FF5757"}}>
                    <span className="hText">Languages:</span> <span className="span1">React-Native</span><br/>
                    <span className="hText">IDE and Plugins:</span> <span className="span1">Visual Studio Code</span>,<span className="span1">Bootstrap</span><br/>
                    <span className="hText">Platform:</span><span className="span1">Android</span>,<span className="span1">Ios</span><br/>
                    <span className="hText">Link:</span><span className="span1">Not Yet Published</span><br/>
 
               
                </div>

                <div className="b">
                 <div className="cricle">
                 {/* <ArrowBackIosOutlined 
                  onClick={()=>{p===0?setP(2):setP(p-1)}}
                  style={{fontSize:"80",color:"white", marginRight:"10px"}}>
                 </ArrowBackIosOutlined> */}
                 </div>
                 <div className="b1" style={{ backgroundImage:`url(/images/wip2.png)`}}></div>
                 <div className="cricle">
                 {/* <ArrowForwardIosOutlined 
                  onClick={()=>{p===2?setP(0):setP(p+1)}}
                  style={{fontSize:"80",color:"white" ,marginLeft:"10px"}}>
                 </ArrowForwardIosOutlined>  */}
                 </div>
                </div>
            </div>}
            
        </div>

      
    </div>
    
   )
}
export default Project;