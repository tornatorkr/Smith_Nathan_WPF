// Nathan Smith - Oct. 26, 2014 - Assignment: Functions - Personal Calulator
//This calculator will determine the spendable excess income available per month
//input required will be: net pay per month; rent or mortgage payment ; utilities payment; groceries and household shopping expenses; funds set aside for savings

//Declaration and assignment

var takeHomeM = prompt("Let's calculate your excess income for the month.\nPlease enter your take home pay per month.");

if(takeHomeM == " " || takeHomeM == 0){
	var takeHomeChk = prompt("I didn't get that. I was expecting a dollar amount.\nPlease enter your monthly net pay in dollars.");
	takeHomeM = takeHomeChk;//checks for input
}

var rentOrMort = prompt("Please enter your tax rate as a decimal \(i.e. 30% as .30\).");

if(avgTax >= 1){
	var avgTaxchk = prompt("I didn't get that. I was expecting a decimal figure.\nPlease enter your tax rate as a decimal figure.");
	avgTax = avgTaxchk;//checks for input
}

var addWithhold = prompt("Please enter any additional withholding in whole dollars.");


var takeHomePay = grossPay - grossPay * avgTax - addWithhold; //*algorithm*/
console.log("Your net pay for the week is: $"+takeHomePay);//prints result to console
