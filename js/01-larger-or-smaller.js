// Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two 
//within the browser window. Don’t forget to handle the fact that the two could be equal.

var var1 = prompt("What is the first number");
var var2 = prompt("What is the second number");
if (var1 > var2) {
    console.log ('The value of the number is ' + var1);
} 
else {
    console.log ('The value of the number is ' + var2);
} 