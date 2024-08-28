let checkCelsius=document.getElementById("toCelsius");
let checkFahrenheit=document.getElementById("toFahrenheit");
const result=document.querySelector(".result");



function convert(){    
    if(checkCelsius.checked){
            const valueToConvert=document.getElementById("toconvert").value;
            const toCelsius=((valueToConvert-32)*5)/9;
            const outcome=`The conversion of ${valueToConvert}°F to Celsius is ${toCelsius}°C`;
            result.textContent=outcome;
            
        }
        else if(checkFahrenheit.checked){
            const valueToConvert=document.getElementById("toconvert").value;
            const toFahrenheit=((valueToConvert*9)/5)+32;
            const outcome=`The conversion of ${valueToConvert}°C to Fahrenheit is ${toFahrenheit}°F`;
            result.textContent=outcome;

            

    }  

}
