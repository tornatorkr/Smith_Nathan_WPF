// Nathan Smith - Oct. 26, 2014 - Assignment: Functions - Industry Calulator
//This calculator will determine the call quality rating of an individual call
//input required will be: "Y" or "N" responses to required call content

 

var callGreet = prompt("Let's calculate the quality rating for an agent's call.\nPlease respond with \"Y\" or \"N\" to the following questions.\nDid agent use approved Greeting and Closing Scripts? \(Y or N?\)");
if(callGreet == " " || callGreet == 0){
	var callGreetChk = prompt("I didn't get that.\nPlease enter \(Y or N?\)");
	
	callGreet = callGreetChk;
	
}//checks input

if(callGreet === "Y"){
	
	callGreet = 50;
	
}else{
	
	callGreet = 0;
	
}

var callSpell = prompt("Did agent confirm the spelling of the client's first and last name? \(Y or N?\)");
if(callSpell == " " || callSpell == 0){
	var callSpellChk = prompt("I didn't get that.\nPlease enter \(Y or N?\)");
	
	callSpell = callSpellChk;
	
}//checks input

if(callSpell === "Y"){
	
	callSpell = 20;
	
}else{
	
	callSpell = 0;
	
}



var callRsrc = prompt("Did agent utilize available resources as necessary? \(Y or N?\)");
if(callRsrc == " " || callRsrc == 0){
	var callRsrcChk = prompt("I didn't get that.\nPlease enter \(Y or N?\)");
	
	callRsrc = callRsrcChk;
	
}//checks input

if(callRsrc === "Y"){
	
	callRsrc = 5;
	
}else{
	
	callRsrc = 0
	
}

var callAccur = prompt("Did agent provide accurate information? \(Y or N?\)");
if(callAccur == " " || callAccur == 0){
	var callAccurChk = prompt("I didn't get that.\nPlease enter \(Y or N?\)");
	
	callAccur = callAccurChk;
	
}//checks input

if(callAccur === "Y"){
	
	callAccur = 25;
	
}else{
	
	callAccur = 0;
	
}

var calcQual = function(g, s, r , a){//anonymous function
	
	var score = g + s + r + a;
	return score;
	
}
	
var callRate = calcQual(callGreet, callSpell, callRsrc, callAccur);//funtion call


console.log("The individual call quality rating is " + callRate + "%.");
