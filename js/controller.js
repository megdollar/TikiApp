//This will contain scores, num of questions

//Quiz constructor function initialize score at 0, questions, question index (currently on) 0
function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

//get the index of current question
Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
};

//check if quiz has ended or not
Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
};

//check if answer is correct (maybe change)
Quiz.prototype.guesses = function (answers) {
	//increment the question index regardless of if it is correct or not

	//checks the correct answer from the model.js
	if(this.getQuestionIndex().correctAnswer(answers)){
		var scoreTest = this.score += this.answers;
        console.log(this.score);
	}

	//increment the question index regardless of if it is correct or not
	this.questionIndex++;
};
