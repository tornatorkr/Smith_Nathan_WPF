// Nathan Smith - Oct. 19, 2014 - Assignment: Functions - Wacky Calulator
//This "wacky calculator" will demonstrate a calculation utilizing a function
//input required will be numerical answers to questions



var numberA = prompt("Please enter any random number not equal to zero.");
if(numberA == " " || numberA == 0){
	var numberAchk = prompt("I didn't get that.\nPlease enter any random number not equal to zero.");
	
	numberA = numberAchk;
	
}//checks input
var numberB = prompt("Please enter a second random number not equal to zero.");
if(numberB == " " || numberB == 0){
	var numberBchk = prompt("I didn't get that.\nPlease enter any random number not equal to zero.");
	
	numberB = numberBchk;
	
}//checks input

var numberC = prompt("Please enter a third random number not equal to zero.");
if(numberC == " " || numberC == 0){
	var numberCchk = prompt("I didn't get that.\nPlease enter any random number not equal to zero.");
	
	numberC = numberCchk;
	
}//checks input

var numberD = prompt("Please enter a fourth random number not equal to zero.");
if(numberD == " " || numberD == 0){
	var numberDChk = prompt("I didn't get that.\nPlease enter any random number not equal to zero.");
	
	numberD = numberDChk;
	
}//checks input

var quadN = multiCalc(numberA, numberB, numberC, numberD); //function call -- returned value is stored in "quadN"
console.log("You're result is: " + quadN + " units.");


function multiCalc(a, b, c, d){
	
	var result = (a-b) / (c-d);
	return result;
	
}






