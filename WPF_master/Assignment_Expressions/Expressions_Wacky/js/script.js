// Nathan Smith - Oct. 12, 2014 - Assignment: Expressions - Wacky Calulator
//This "wacky calculator" will demonstrate a calculation from items in an array and then adding a value of one cubic unit to show an example of an operator
//input required will be numbers that could be resolved as cubic units

var length; 
var width; 
var height; 

length = prompt("We are going to calculate volume based on the unit of an orange.\nPlease enter the length in orange units.");
width = prompt("Please enter the width in orange units.");
height = prompt("Please enter the height in orange units.");

var orangeUnits = [length, width, height];
var volume = orangeUnits[0] * orangeUnits[1] * orangeUnits[2];
volume ++;//adds value of one cubic unit to result

console.log("Your unintended result is: "+ volume +" cubic oranges because oranges grow.")
