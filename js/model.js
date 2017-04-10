var answerScore;
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
        //for (i=0; i<Question.length; i++){
            
        
		  
        console.log(this.score + answers);

       
       // }
	}
    

	//increment the question index regardless of if it is correct or not
	this.questionIndex++;
};


//Constructor function: each question has three attributes: text, choices, answers
function Question(text, choices, answers){
	this.text = text;
	this.choices = choices;
	this.answers = answers;
}

//Detect answer for each choice selected in question. return true if choice = answer
//maybe need to change this to map each answer to each choice 
Question.prototype.correctAnswer = function(choice) {
	//return choice === this.answers;
    for (i=0; i<Question.length; i++){
        //for (answers in questions){
                //console.log(this.answers[i]);
                console.log(this.choices[i] = this.answers[i]);
            

        
        
        //}
        
    }
};

//function for each question loop through answer and map the value to choice 


function populate() {
	if(quiz.isEnded()){
		showScores();
	} else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++ ){
			var choiceElement = document.getElementById("choice" + i);
			choiceElement.innerHTML = choices[i];
			//check the question
			guesses("btn" + i, choices[i]);
		}

		showProgress();

	}
}

function showScores() {
	//if quiz is ended show the scores in this html
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
	var element = document.getElementById("quizContainer");
	element.innerHTML = gameOverHtml;
}

function guesses(id, guess){
	var button = document.getElementById(id);
	button.onclick = function() {

		//if button is clicked call the guess function
		quiz.guesses(guess);
		populate();
	};
}

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}


//question, array of choices, array of answers
var questions = [
	new Question("Best Van Halen lead singer?", ["Diamond David Lee Roth","Sammy Hagar", "I don't know"], [0,10,0]),
	new Question("Are the bartenders wearing Aloha Shirts?", ["No", "Yes, but they are very touristy", "Yes, and they're pretty sweet"],[0,5,10]),
	new Question("Can you see any whole limes behind the bar?", ["Yes", "No", "Yes, but they're moldy"], [5,0,1]),
	new Question("Are there any tiki gods on the wall?",["No", "Yes, and they are hand carved", "Yes, generic store-bought"], [0,15,5]),
	new Question("How many drinks have you seen lit on fire go by?", ["0 safety hazard!", "0 but I've seen them on #Instagram","1 or more"], [0,5,15]),
	new Question("Is there a rum section on the menu?", ["No", "Yes, but nothing special", "Yes and they're divided by country"],[0,1,15]),
	new Question("Are any surfaces around you covered in Bamboo?", ["No", "A few", "All of them"],[0,1,15]),
	new Question("From where you sit, how many bottles of flavored rum can you count? ", ["0", "1-3", "NOT ENOUGH!!"],[10,1,0]),
	new Question("How many different types of Tiki Mugs are behind the bar?", ["1 Generic mug reserved for Tiki Tuesday", "1-3 One of those mugs costs $20+ to buy, but its cool ", "10+ but you cant drink out of them, they're the owner's personal collection"],[0,1,15]),
	new Question("Are you in the basement of a hotel or somehow attached to a hotel?", ["No", "How is this relevant?", "Yes"],[0,1,15]),
	new Question("Does the bar ever host guest DJ's?", ["No, cause I'm in a tiki bar!!", "Yes, for retro dance party on an off night", "Yes, for Friday night Dance Parties"],[15,1,0]),
	new Question("Does the bar have signature swizzle sticks? ", ["No", "Yes", "I don't now"],[0,15,0]),
	new Question("Are any of the patrons wearing swim trunks or flip-flops?", ["No", "Yes, but I doubt they know how to swim", "Yes, they just got off the water"],[15,0,0]),
	new Question("Do they offer Scorpion Bowls / Communal Drinks?", ["No, they are time consuming", "Of course, B-52s met over a Scorpion Bowl", "The have pitches of daquiris"],[0,15,1]),
	new Question("Are there fresh flowers in any of the drinks?", ["Yes, and I love it!", "Yes, and I'm insecure about it.", "No. But that reminds me to call my mom for mothers day."],[10,5,0]),
	new Question("Can you see the words 'Cabo Wabo' from where you sit?", ["No, Im in a tiki bar. ", "Yes, that’s why I came to this bar.", "Its tattood on my neck, but I can't see it"],[15,0,0]),
	new Question("Can the Bartender talk to a patron for more than 3 minutes without saying 'Orgeat'", ["No", "Yes", "Is that a word?"],[5,0,0]),
	new Question("Yell 'Is it just me or is Jimmy Buffet a big ole Burger Breathed Bozo?'", ["Getting thrown out?", "Getting a free shot?", "Getting thrown out but its worth it!"],[0,5,10])
	];

var quiz = new Quiz(questions);

//function to populate questions
populate();


//for (i=0; i<questions.length; i++){
  //  console.log(questions[i].answers);
//}




