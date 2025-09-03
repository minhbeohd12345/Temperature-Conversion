console.log("Temperature Conversion")
function Celsius_To_Fahrenheit(Celsius){
  let Result = (Celsius * 9/5) + 32;
document.getElementById("demo").innerHTML = Result.toFixed(3) + "*F";
}

function Fahrenheit_To_Celsius(Fahrenheit){
  let Result2 = (Fahrenheit - 32) * 5/9;
document.getElementById("demo2").innerHTML = Result2.toFixed(3) + "*C";
}
