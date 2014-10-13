// Nathan Smith - Oct. 12, 2014 - Assignment: Expressions - Personal Calulator
//This calculator will determine the expense for gasoline per week
//input required will be: current cost per gallon; averge miles per gallon for the vehicle; miles traveled per week

//Declaration and assignment

var price; 
var mpg;
var distance;
var cost; 

price = prompt("I will calculate the amount that you spend on gasoline in a week's time.\nPlease enter the current price of gas per gallon.");
mpg = prompt("Please enter your vehicle's average mpg.");
distance = prompt("Please enter the distance traveled this week in miles.");

cost = distance / mpg * price; //*algorythm*/
console.log("You have spent $"+cost + " on gasoline this week.");//prints result to console
