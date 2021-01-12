/*
1) define a function to get the numeric value from user
2) use parseFloat function so that it parse an argument and returns a floating point number
3) define calculation value from F to C using formula F=(9/5)*C + 32
4) Link the function to respective id in html code
5) Display output of Celsius on page





Connect HTML and JS files
User clicks button
Grab the number from the text input
Calculate the celsius value with the formula c = (f * 9/5) + 32
Update celsius text
*/

/*
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML=(valNum-32)/1.8;
  }
  */


function tempConvert() {
 // let celsiusCalc = parseFloat(document.getElementById("degrees").value); 
  //document.getElementById("getCelsius").innerHTML = Math.round(
    //celsiusCalc * (5/ 9) - 18 
  //);
//}

const degreeCont=document.getElementById("degrees").value;
const calc=(degreeCont-32)*5/9;
document.getElementById("getCelsius").innerHTML=calc;
}

function tempC(){
const degCov=document.getElementById("deg").value;
const cal=(degCov*1.8) + 32;
document.getElementById("getFhr").innerHTML=cal;
}