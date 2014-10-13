// Nathan Smith - Oct. 12, 2014 - Assignment: Expressions - Industry Calulator
//This calculator will determine a call center representative's projected call volume for the month
//input required will be: call center agent's first and last name; average calls per day; number of dropped or unresolved calls, days worked per month

var firstName; 
var lastName;
var ein;//Employee Identification Number
var fullName = [firstName, lastName, ein];//array 
var averageCallsDaily;
var droppedCalls; 
var daysWorked; 

firstName = prompt("I will calculate your projected number of completed calls for the month.\nPlease enter your first name.");
lastName = prompt("Please enter your last name.");
ein = prompt("Please enter your 5-digit Employee Identification Number.");
averageCallsDaily = prompt("Please enter the average number of received calls per day.");
droppedCalls = prompt("Please enter the average number of dropped or unresolved calls per day.");
daysWorked = prompt("Please enter the number of working days for this month.");
