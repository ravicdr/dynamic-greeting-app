
import React from 'react';

function Heading(){
    const heading={
        color:"brown",
        textAlign: "center",
        padding: "5px",
        margin: "2px",
        textTransform: "capitalize",
        fontFamily: '"Potta One","cursive"',
        
        
        };
        const bodyStyle={
            height:"600px",
            }
          
 var date=new Date();

const greeting={
    textAlign:"center",
    
    margin:"30px",
    border:'1px solid black',
    width:"90%",
    borderRadius:"10px",
    backgroundColor:'grey'
    }
   
const msgStyle={

}
var curtime=date.getHours();
let message="";
if(curtime>=1&&curtime<12){
  message="Good Morning";
  msgStyle.color="green";
  bodyStyle.backgroundImage="url(https://loveincorporated.blob.core.windows.net/contentimages/gallery/2c833c40-38ea-4195-959b-36bfd8cf9a76-sunrise_spots_utah.jpg)"
  
}
else if(curtime>=12&&curtime<20){
  message="Good Evening";
  msgStyle.color="orange";
  bodyStyle.backgroundImage="url(https://thumbs.dreamstime.com/b/scenic-tropical-beach-palm-trees-sunset-background-sri-lanka-scenic-tropical-beach-palm-trees-sunset-background-126402211.jpg)";
  bodyStyle.position="relative";

}
else{
  message="Good Night";
  msgStyle.color="blue";
  bodyStyle.backgroundImage="url(https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1018473934%2F960x0.jpg%3Ffit%3Dscale)"
}
var date=new Date();
var d=date.toLocaleDateString("en-US").split("/");
var t=date.toLocaleTimeString("en-US").split(/:| /)
    return (<>
<div style={bodyStyle}><h1 contentEditable="true" style={heading}>hey Developers</h1>

<div className="pclass">
  <p>{`todays Date is ${d}`}</p>
  <p>{`current time is ${t}`}</p>
  </div>
  
 <div style={greeting}> 
    <h1  >Hello sir ,<span style={msgStyle}>{ message}</span></h1>
  </div>
  
</div>
</>
    )
}
export default Heading;