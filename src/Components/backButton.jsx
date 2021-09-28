import React from 'react';
import {useHistory} from "react-router-dom";
import './backButton.css'
import { ArrowBack ,Home} from '@material-ui/icons';
function BackButton({title})
{
    const history = useHistory();
    return(
        
        <div
        title={title||"Back to home"}
        onClick={() => history.goBack()} 
        className="backButton">
            <ArrowBack style={{ 
                fontSize: 40,
                marginLeft:4,
                marginTop:7 } } />
            <Home style={{ 
                fontSize: 45,
                marginRight:4,
                marginTop:4 } } />            
            </div>
    )
}
export default BackButton;