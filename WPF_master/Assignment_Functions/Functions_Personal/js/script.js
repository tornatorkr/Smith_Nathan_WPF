// Nathan Smith - Oct. 26, 2014 - Assignment: Functions - Personal Calulator
//This calculator will determine the spendable excess income available per month
//input required will be: net pay per month; rent or mortgage payment ; utilities payment; groceries and household shopping expenses; funds set aside for savings

//Declaration and assignment

var takeHomeM = prompt("Let's calculate your excess income for the month.\nPlease enter your take home pay per month.");

if(takeHomeM == " " || takeHomeM == 0){
	var takeHomeChk = prompt("I didn't get that. I was expecting a dollar amount.\nPlease enter your monthly net pay in dollars.");
	takeHomeM = takeHomeChk;//checks for input
}

var rentOrMort = prompt("Please enter your monthly rent or mortgage payment in dollars.");

if(rentOrMort == " " || rentOrMort == 0){
	var avgTaxchk = prompt("I didn't get that. I was expecting a dollar.\nPlease enter your monthly payment in dollars.");
	rentOrMort = rentOrMortChk;//checks for input
}

var utilExpn = prompt("Please enter your total monthly expenses for utilities, cell phone, cable, Internet, groceries and other household expenses in dollars.");

if(utilExpn == " " || utilExpn == 0){
	var utilExpnChk = prompt("I didn't get that. I was expecting a dollar.\nPlease enter your total expenses in dollars.");
	UtilExpn = UtilExpnChk;//checks for input
}

var savingsM = prompt("Please enter monthly amount set aside for savings in whole dollars.");



var invest = (savingsM == " " || savingsM == 0) ? "Saving is wise financial planning!" : "You should consider setting aside some money for savings in next month's buget! ";//ternary
console.log(invest);


var dispIncome = excessIncome(takeHomeM, renOrMort, utilExpn, savingsM); //function call -- returned value is stored in "dispIncome"

function excessIncome(p, m, u, s){
	
	var result = p - m - u - s;
	return result;
	
	
}
