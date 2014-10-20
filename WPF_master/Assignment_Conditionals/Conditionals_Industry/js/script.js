// Nathan Smith - Oct. 19, 2014 - Assignment: Conditionals - Industry Calulator
//This calculator will determine if a call center representative will receive a bonus for the month
//input required will be: call center representative's call volume and quality rating

var callVolumeMin = 500; 
var callQualMin = 95;
 

var repCallVolume = prompt("Let's see if you qualify for a bonus this month.\nPlease enter your call volume for the month.");
if(repCallVolume == " " || repCallVolume <= 0){
	var repCallVolChk = prompt("I didn't get that.\nPlease enter your call volume for the month in whole numbers greater than zero.");
	
	repCallVolume = repCallVolChk;
	
}//checks input

var repCallQual = prompt("Please enter your your call quality rating as a whole percentage.");
if(repCallQual == " " || repCallQual <= 0){
	var repCallQualChk = prompt("I didn't get that.\nPlease enter your call quality percentage for the month in whole numbers greater than zero.");
	
	repCallQual = repCallQualChk;
	
}//checks input


if(repCallVolume >= callVolumeMin && repCallQual >= callQualMin){
	console.log("Congratulations! You qualify for a bonus this month!");
	
}else{
	console.log("Sorry, no bonus this month.");
	
}