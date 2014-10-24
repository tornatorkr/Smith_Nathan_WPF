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

function dogYears(age){//parameter is always in funtion definition (stores)
	
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.");
}// function defined: age to be input

var age = prompt("Please enter age in human years.");//prompts user for input parameter - scope is outside of function to be put into function by the function call

dogYears(age);//function call - parenthesis holds "arguements" to send into the function parameter

// Functions - Returning Values

var total = calcAreaR(30, 30);// function call - "total" stores the returned value from the funtion
console.log(total);//demonstrates that values are sent to function, returned and printed out
function calcAreaR(w, h){
	
	var area = w * h;
	return area;// returns or spits out result of function to calcAreaR() and is stored in "total"

}

//console.log(total);

//subroutines that return values are called Functions and subroutines that do not return values are called Procedures