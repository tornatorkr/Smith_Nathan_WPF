// Nathan Smith - Oct. 19, 2014 - Assignment: Conditionals - Wacky Calulator
//This "wacky calculator" will demonstrate a calculation utilizing else if and ternary operators
//input required will be standard ROYGBIV colors to choose fruit to eat

var length; 
var width; 
var height; 

var colorA = prompt("What is your favorite color of the rainbow?\nPlease enter: red, orange, yellow, green, blue, indigo or violet.");
if(colorA == " " || colorA == 0){
	var colorAchk = prompt("I didn't get that.\nPlease enter your color choice.");
	
	colorA = colorAchk;
	
}//checks input
var colorB = prompt("Please enter your second favorite color of the rainbow.");
if(colorB == " " || colorB == 0){
	var colorBchk = prompt("I didn't get that.\nPlease enter your color choice.");
	
	colorB = colorBchk;
	
}//checks input

var colorC = prompt("Please enter your third favorite color of the rainbow.");
if(colorC == " " || colorC == 0){
	var colorCchk = prompt("I didn't get that.\nPlease enter your color choice.");
	
	colorC = colorCchk;
	
}//checks input

var citrus = prompt("Do you like citrus fruit? Y/N");
if(citrus == " " || citrus == 0){
	var citrusChk = prompt("I didn't get that.\nPlease enter \"Y\" or \"N\".");
	
	citrus = citrusChk;
	
}//checks input

var produce = (citrus == "Y") ? "Let's have some citrus fruit!" : "Sorry, only citrus fruit is available.  Here are your choices: ";
console.log(produce);

var fruitA = "blood oranges";
var fruitB = "lemons"; 
var fruitC = "kiwis";

if(colorA === "red" || colorA === "orange"){
	console.log(fruitA);
	
}else if(colorA == "yellow"){
	console.log(fruitB);
	
	
}else{
	console.log(fruitC);
	
}//compares and prints to console result from first color input

if(colorB === "red" || colorB === "orange"){
	console.log(fruitA);
	
}else if(colorB == "yellow"){
	console.log(fruitB);
	
	
}else{
	console.log(fruitC);
	
}//compares and prints to console result from second color input




