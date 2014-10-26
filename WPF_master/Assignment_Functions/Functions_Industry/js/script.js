// Nathan Smith - Oct. 26, 2014 - Assignment: Functions - Industry Calulator
//This calculator will determine the call quality rating of an individual call
//input required will be: "Y" or "N" responses to required call content

var callVolumeMin = 500; 
var callQualMin = 95;
 

var callGreet = prompt("Let's calculate the quality rating for an agent's call.\nPlease respond with \"Y\" or \"N\" to the following questions.\nDid agent use approved Greeting and Closing Scripts? \(Y or N?\)");
if(callGreet == " " || repCallVolume == 0){
	var callGreetChk = prompt("I didn't get that.\nPlease enter \(Y or N?\)");
	
	callGreet = callGreetChk;
	
}//checks input

var callSpell = prompt("Did agent confirm the spelling of the client's first and last name? \(Y or N?\)");
if(callSpell == " " || callSpell == 0){
	var repCallQualChk = prompt("I didn't get that.\nPlease enter \(Y or N?\)");
	
	callSpell = callSpellChk;
	
}//checks input



var callRsrc = prompt("Did agent utilize available resources as necessary? \(Y or N?\)");
if(callSpell == " " || callSpell == 0){
	var callRsrcChk = prompt("I didn't get that.\nPlease enter \(Y or N?\)");
	
	callRsrc = callRsrcChk;
	
}//checks input

var callAccur = prompt("Did agent provide accurate information? \(Y or N?\)");
if(callAccur == " " || callAccur == 0){
	var callRsrcChk = prompt("I didn't get that.\nPlease enter \(Y or N?\)");
	
	callAccur = callAccurChk;
	
}//checks input

if(repCallVolume >= callVolumeMin && repCallQual >= callQualMin){
	console.log("Congratulations! You qualify for a bonus this month!");
	
}else{
	console.log("Sorry, no bonus this month.");
	
}//compares input values to min values - if both conditions are true then there is a bonus.