function convert() {

 const inputValue = Number(
document.getElementById("userInput").value);

 const unit = 
document.getElementById("unit").value;

 const milesToKm = unit === "milesToKm";

 let result = 0;

 if (milesToKm === true) {
  result = inputValue * 1.60934;
 } else {
  result = inputValue / 1.60934;
 }
  
result = result.toFixed(2);
  
 let resultString = "";

 if (milesToKm) {
  resultString = inputValue + " miles are " + result + " km";
 } else {
  resultString = inputValue + " km are " + result + " miles";
 }

 const resultElement = document.getElementById("resultElement");
 resultElement.innerHTML = resultString;
}