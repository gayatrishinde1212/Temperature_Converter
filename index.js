const celciusE1=document.getElementById("celsius");

const fahrenheitE1=document.getElementById("fahrenheit");

const kelvinE1=document.getElementById("kelvin");

function computeTemp(event){
    const currentValue= + event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvinE1.value=(currentValue + 273.32).toFixed(2)
            fahrenheitE1.value=(currentValue *1.8 +32).toFixed(2)
            break;
        
        case "fahrenheit" : 
            celciusE1.value=((currentValue - 32)/1.8).toFixed(2) 
            kelvinE1.value=((currentValue - 32)/1.8 +273.32).toFixed(2)
            break;
         
        case "kelvin":
            celciusE1.value=(currentValue - 273.32).toFixed(2) 
            fahrenheitE1.value=((currentValue-273.32)*1.8 + 32 ).toFixed(2)  
            break;  
    
        default:
            break;
    }
}