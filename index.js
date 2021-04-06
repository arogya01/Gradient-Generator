
function setGradient(){
let c1=document.getElementById("color1").value;
let c2=document.getElementById("color2").value;
  document.body.style.background = 
   "linear-gradient(to right, " 
   + c1
   + ", " 
   + c2
   + ")";
  
  let description=document.getElementById("description");
  description.textContent=" current value:linear-gradient(left to right," + c1 + "," + c2  +" )";
  }


document.getElementById("color1").addEventListener("input", setGradient);
document.getElementById("color2").addEventListener("input",setGradient);

