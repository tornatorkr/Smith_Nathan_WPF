// Nathan Smith - Oct. 19, 2014 - Assignment: Conditionals - Personal Calulator
//This calculator will determine the net pay per week
//input required will be: gross pay; average tax rate; addtional withholding

//Declaration and assignment

var grossPay = prompt("Let's calculate your take home pay for the week.\nPlease enter your gross pay for the week.");
var avgTax;
var addWithhold;
var takeHomePay; 



takeHomePay = grossPay * avgTax - addWithhold; //*algorithm*/
console.log("Your net pay for the week is: $"+takeHomePay);//prints result to console
