// Loops

//While Loop

console.log("________WHILE LOOPS________");

var b = 25; //value of "b" sets the number of times of repetition
while(b > 0){
	
	console.log(b + " ducks in a row.");
	b--; //subtracts 1 from b each time through the loop
	
}

//Do While Loops
console.log("________DO WHILE LOOPS________");

var c = 10;
do{
	
	console.log(c + " ducks in a row.");
	c--;
}
while(c > 0);//with do while loop the code within the loopis performed at least once even if the condition is false

//For Loops
console.log("________FOR LOOPS________");

for(var i = 10; i > 0; i--){//sets index, condition and increment or decrement all in the same statement
	
	console.log(i + " ducks in a row.");
	
	
}