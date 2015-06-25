/*Exercise 3: Security Questions

Create an array called securityQuestions. Each element of securityQuestions will be an object 
with two keys: question and expectedAnswer.
Populate (fill) securityQuestions with at least three such objects. 
Feel free to just make them up. For example, one security question object might be:

{ question: "What was your first pet's name?", expectedAnswer: "FlufferNutter" }

Write code that goes through each of the security questions doing the following:

prompt the user with the question
check whether the user's input matches the expected answer
if the answer does match, ask the next question
if the answer doesn't match, stop asking questions and pop up an alert message.
*/


var securityQuestions = [
	{ question: "What is your fave color?", expectedAnswer: "blue" },
	{ question: "What is your mom fave food", expectedAnswer: "sushi" },
	{ question: "What was your first pet's name?", expectedAnswer: "gracie" }

];

for (var i=0; i<securityQuestions.length; i++){
	var result = prompt(securityQuestions[i].question);
		if (result !== securityQuestions[i].expectedAnswer){
				alert("invalid answer, try again!");
				break;
		} else {
			console.log(result);
		}
}
//console.log(securityQuestions);
