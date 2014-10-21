// Functions - Basic Structure

/* function functionName(){
	
	code to be executed
	
}

*/

function outputMsg(){
	
	console.log("Hello World!");	
	
}

function calcArea(){
	
	var length = 20;
	var width = 30;
	var area = length * width;
	console.log(area);
	
}

//Execution, Invoking or Calling a Function (Function Call):
// functionName();

calcArea();
outputMsg();

//Variable Scope - variables declared inside a function with the same name as a variable declared outside of the function will take on the value assigned inside the funtion, separate from outside

//Parameters and Arguements
// calculate dog years using a function

function dogYears(age){
	
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.");
}// function defined: age to be input

var age = prompt("Please enter age in human years.");//prompts user for input parameter - scope is outside of function to be put into function by the function call

dogYears(age);//function call
