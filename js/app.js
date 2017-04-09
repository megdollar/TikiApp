
//Constructor function: each question has three attributes: text, choices, answers
function Question(text, choices, answers){
	this.text = text;
	this.choices = choices;
	this.answers = answers;
}

//Detect answer for each choice selected in question. return true if choice = answer
//maybe need to change this to map each answer to each choice 
Question.prototype.correctAnswer = function(choice) {
	return choice === this.answers;
};