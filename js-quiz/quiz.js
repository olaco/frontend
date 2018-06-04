var question= [
  ["How many states are in the U.S", 51],
  ["How many legs does an insect have", 8],
  ["How many continents are there", 6]

];

// Global variables
 
var score = 0; 
var attempt = 0; 
var answer;
var question;
var response;
var html; 

 



function quizAns(quiz){
	// iterate through the array
	for(var i = 0; i < quiz.length; i += 1){
		question = quiz[i][0];
		answer = quiz[i][1];
		response = prompt(question);
		response= parseInt(response);
		if(response === answer){
			attempt += 1;
			score += 1;
			alert( response + " is " + "right" );
			alert("You got " + score + " of " + attempt + " attempts");
 
		}
        else{
        	attempt += 1;
        	score -= 0
        	alert(response);
        	alert("Wrong");
        	alert("You got " + score + " of " + attempt + " attempts");

        };
        

	};

		
         };


		

var output= document.querySelector("#output");
output.style.color = "pink";
output.textContent="You got " + score + " of " + attempt + " attempts"
quizAns(question);