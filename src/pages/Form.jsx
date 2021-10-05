import React,{useState} from 'react';
import './Form.css'
import BackButton from '../Components/backButton';
import  axios  from 'axios';
import { useHistory } from "react-router-dom";



const api=axios.create({
  baseURL:'https://api.npoint.io/768c8e0f17bf398abbb6'
})
 
function Form(){
     const [name,setName]=useState("");
     const [email,setEmail]=useState("");
     const [mobile,setMobile]=useState("");
     const [message,setMessage]=useState("");
     const [id,setId]=useState("");
     const history = useHistory();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setId(name+(Math.floor(Math.random()*1000)).toString)
      const newObj={id,name,email,mobile,message}
      if(name.length===0||email.length===0)
      {
        alert("Enter valid name and email")
      }
      else{
        alert("message sent")
        send(newObj);
        console.log(newObj)
        history.push("/");
      }
      

    }
    const send=async (obj)=>{
      let mes= await api.post('/',obj)
    }


    return(
        <div className="container"
        style={{ backgroundImage:`url(/images/backG2.png)`}}>
        <div className="centerPro"><BackButton></BackButton></div>
        <div className="extra1">
         
           
          <form onSubmit={handleSubmit}>
            
            <label >Name:<br/>
            <input
              type="text" 
              value={name}
              placeholder="Your Name..."
              onChange={(e) => setName(e.target.value)}
            />
            </label><br/>

            <label>Email:<br/>
            <input
              type="email" 
              value={email}
              placeholder="Your Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            </label><br/>

            <label>Contact Number:<br/>
            <input
              type="number" 
              value={mobile} 
              placeholder="Your Contact Number..."
              onChange={(e) => setMobile(e.target.value)}
            />
            </label><br/>

            <label>Message:<br/>
            <textarea 
              value={message} 
              placeholder="Your Message..."
              onChange={(e) => setMessage(e.target.value)} />
            </label><br/>

            <input 
             type="submit"
             placeholder="Send"
             style={{height:"25px",width:"60%",marginLeft:"50px",marginTop:"10px"}} 
             />
          </form>

          
        </div>

        
        </div>
        
       )

}
export default Form;