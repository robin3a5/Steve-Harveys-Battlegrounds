gameContainer.classList.add("d-none");
newGameButton.classList.add("d-none");
const family1Set = document.getElementById("family1Set");
const family2Set = document.getElementById("family2Set");

const family1Get = document.getElementById("family1Get");
const family2Get = document.getElementById("family2Get");

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answer5 = document.getElementById("answer5");
const answer6 = document.getElementById("answer6");
const answer7 = document.getElementById("answer7");
const answer8 = document.getElementById("answer8");

const scoreholdera = document.getElementById("scoreholdera");
const scoreholder = document.getElementById("scoreholdermain");
const scoreholderb = document.getElementById("scoreholderb");


const strike1 = document.getElementById("strike1");
const strike2 = document.getElementById("strike2");
const strike3 = document.getElementById("strike3");

const userguess = document.getElementById("userguess");
const question = document.getElementById("question");


const buzzer = document.getElementById("buzzer");
const submitButton = document.getElementById("submitButton");

const startButton = document.getElementById("startButton");

const teamHolder = document.getElementById("teamHolder");

var questionSelector = 0;
var correctCounter = 0;
var questionsArrayMax = questions.length;
var teamTurn = 1;
scoreholdera.value = 0;
scoreholderb.value = 0;
var roundCounter = 1;
var previousQuestions = [];


// no same results
// go through and simplify variables 
//Jesus really go through and shorten variables




// run question selector
// if question selected equals a previous question choose new question
// repeat until new question is chosen
// log selected question into previous questions array

function selectQuestion() {   
   questionSelector = Math.floor(Math.random() * Math.floor(questionsArrayMax));
   while (previousQuestions.includes(questionSelector)) {
      questionSelector = Math.floor(Math.random() * Math.floor(questionsArrayMax));
      if (previousQuestions.length == questionsArrayMax) {
         //all questions completed
         //make new game button apear
         question.innerHTML = "You've gone through all the questions! Want to reset and play again?"

         //clear previous qustions array
         previousQuestions.length = 0;
         break;
      }
   }
   previousQuestions.push(questionSelector);
};

function clearPlaceholders() {
   answer1.placeholder = "";
   answer2.placeholder = "";
   answer3.placeholder = "";
   answer4.placeholder = "";
   answer5.placeholder = "";
   answer6.placeholder = "";
   answer7.placeholder = "";
   answer8.placeholder = "";
}

function clearStrikes() {
   strike1.value = "";
   strike2.value = "";
   strike3.value = "";
}

function setplaceholders() {
   scoreholder.value = 0;
   if (questions[questionSelector].questionsLength == 1) {
      answer1.placeholder = "1"
   }
   else if (questions[questionSelector].questionsLength == 2) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
   }
   else if (questions[questionSelector].questionsLength == 3) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
   }
   else if (questions[questionSelector].questionsLength == 4) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
      answer4.placeholder = "4"
   }
   else if (questions[questionSelector].questionsLength == 5) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
      answer4.placeholder = "4"
      answer5.placeholder = "5"
   }
   else if (questions[questionSelector].questionsLength == 6) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
      answer4.placeholder = "4"
      answer5.placeholder = "5"
      answer6.placeholder = "6"
   }
   else if (questions[questionSelector].questionsLength == 7) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
      answer4.placeholder = "4"
      answer5.placeholder = "5"
      answer6.placeholder = "6"
      answer7.placeholder = "7"
   }
   else if (questions[questionSelector].questionsLength == 8) {
      answer1.placeholder = "1"
      answer2.placeholder = "2"
      answer3.placeholder = "3"
      answer4.placeholder = "4"
      answer5.placeholder = "5"
      answer6.placeholder = "6"
      answer7.placeholder = "7"
      answer8.placeholder = "8"
   }
}

startButton.addEventListener('click', function (event) {
   gameContainer.classList.remove("d-none");
   startContainer.classList.add("d-none");
   family1Get.innerHTML = family1Set.value;
   family2Get.innerHTML = family2Set.value;
   selectQuestion();
   setplaceholders();
   question.innerHTML = questions[questionSelector].question;
});

submitButton.addEventListener('click', function (event) {
   guessChecker();
   userguess.value = "";
   
   if (correctCounter == questions[questionSelector].questionsLength) {
      submitButton.classList.add("d-none");
      newGameButton.classList.remove("d-none");
      addPoints();
   }
});

userguess.addEventListener("keyup", function(event) {
   if (event.key === "Enter") {
     event.preventDefault();
     document.getElementById("submitButton").click();}
 });

newGameButton.addEventListener('click', function (event) {
   selectQuestion();
   clearPlaceholders();
   correctCounter = 0;
   question.innerHTML = questions[questionSelector].question;
   clearStrikes();
   setplaceholders();
   newGameButton.classList.add("d-none");
   submitButton.classList.remove("d-none");
   roundCounter += 1;
   if (roundCounter % 2 == 0) {
      teamTurn = 2;
   }
   else {
      teamTurn = 1;
   }
});

function playBuzzer() {
   buzzer.play();
};

function playCorrect() {
   correctCounter += 1;
   correctSound.play();
};

function addStrike() {
   if (strike1.value == "") {
      strike1.value = "X";
   }
   else if (strike2.value == "") {
      strike2.value = "X"
   }
   else if (strike3.value == "") {
      strike3.value = "X"
   }
   else {
      submitButton.classList.add("d-none");
      newGameButton.classList.remove("d-none");
      if (teamTurn == 1) {
         scoreholdera.value = parseInt(scoreholder.value) + parseInt(scoreholdera.value);
      }
      else if (teamTurn == 2) {
         scoreholderb.value = parseInt(scoreholder.value) + parseInt(scoreholderb.value);
      }
      if (questions[questionSelector].questionsLength == 1) {
         answer1.placeholder = questions[questionSelector].answer1;
      }
      else if (questions[questionSelector].questionsLength == 2) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;

      }
      else if (questions[questionSelector].questionsLength == 3) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
      }
      else if (questions[questionSelector].questionsLength == 4) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
      }
      else if (questions[questionSelector].questionsLength == 5) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
      }
      else if (questions[questionSelector].questionsLength == 6) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
         answer6.placeholder = questions[questionSelector].answer6;
      }
      else if (questions[questionSelector].questionsLength == 7) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
         answer6.placeholder = questions[questionSelector].answer6;
         answer7.placeholder = questions[questionSelector].answer7;
      }
      else if (questions[questionSelector].questionsLength == 8) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
         answer6.placeholder = questions[questionSelector].answer6;
         answer7.placeholder = questions[questionSelector].answer7;
         answer8.placeholder = questions[questionSelector].answer8;
      }
   }
};

function addPoints() {
   if (teamTurn == 1) {
      scoreholdera.value = parseInt(scoreholder.value) + parseInt(scoreholdera.value);
      teamTurn = 2;
   }
   else if (teamTurn == 2) {
      scoreholderb.value = parseInt(scoreholder.value) + parseInt(scoreholderb.value);
      teamTurn = 1;
   }
};



function checkFamilySteal() {
   if (strike3.value == 'X') {
      if (teamTurn == 1) {
         scoreholderb.value = parseInt(scoreholder.value) + parseInt(scoreholderb.value);
      }
      else if (teamTurn == 2) {
         scoreholdera.value = parseInt(scoreholder.value) + parseInt(scoreholdera.value);
      }
      if (questions[questionSelector].questionsLength == 1) {
         answer1.placeholder = questions[questionSelector].answer1;
      }
      else if (questions[questionSelector].questionsLength == 2) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;

      }
      else if (questions[questionSelector].questionsLength == 3) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
      }
      else if (questions[questionSelector].questionsLength == 4) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
      }
      else if (questions[questionSelector].questionsLength == 5) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
      }
      else if (questions[questionSelector].questionsLength == 6) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
         answer6.placeholder = questions[questionSelector].answer6;
      }
      else if (questions[questionSelector].questionsLength == 7) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
         answer6.placeholder = questions[questionSelector].answer6;
         answer7.placeholder = questions[questionSelector].answer7;
      }
      else if (questions[questionSelector].questionsLength == 8) {
         answer1.placeholder = questions[questionSelector].answer1;
         answer2.placeholder = questions[questionSelector].answer2;
         answer3.placeholder = questions[questionSelector].answer3;
         answer4.placeholder = questions[questionSelector].answer4;
         answer5.placeholder = questions[questionSelector].answer5;
         answer6.placeholder = questions[questionSelector].answer6;
         answer7.placeholder = questions[questionSelector].answer7;
         answer8.placeholder = questions[questionSelector].answer8;
      }
      submitButton.classList.add("d-none");
      newGameButton.classList.remove("d-none");
   }
}

function guessChecker() {
   var answerTest1 = userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1);

   var answerTest2 = userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1) + "s";

   var answerTest3 = userguess.value.charAt(0).toUpperCase() + userguess.value.slice(1).slice(0, -1);

   var questionAnswer1 = questions[questionSelector].answer1;

   var questionAlternateAnswer1 = questions[questionSelector].alternateanswers1;

   var questionAnswer2 = questions[questionSelector].answer2;

   var questionAlternateAnswer2 = questions[questionSelector].alternateanswers2;

   var questionAnswer3 = questions[questionSelector].answer3;

   var questionAlternateAnswer3 = questions[questionSelector].alternateanswers3;

   var questionAnswer4 = questions[questionSelector].answer4;

   var questionAlternateAnswer4 = questions[questionSelector].alternateanswers4;

   var questionAnswer5 = questions[questionSelector].answer5;

   var questionAlternateAnswer5 = questions[questionSelector].alternateanswers5;

   var questionAnswer6 = questions[questionSelector].answer6;

   var questionAlternateAnswer6 = questions[questionSelector].alternateanswers6;

   var questionAnswer7 = questions[questionSelector].answer7;

   var questionAlternateAnswer7 = questions[questionSelector].alternateanswers7;

   var questionAnswer8 = questions[questionSelector].answer8;
   
   var questionAlternateAnswer8 = questions[questionSelector].alternateanswers8;

   
   if ( answerTest1 === questionAnswer1 || answerTest2 === questionAnswer1 || answerTest3 === questionAnswer1 || answerTest1 === questionAlternateAnswer1 || answerTest2 === questionAlternateAnswer1 ||  answerTest3 === questionAlternateAnswer1) {
      answer1.placeholder = questionAnswer1;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer1point;
      checkFamilySteal()
      playCorrect();
   }
   else if (answerTest1 === questionAnswer2 || answerTest2 === questionAnswer2 || answerTest3 === questionAnswer2 || answerTest1 === questionAlternateAnswer2 || answerTest2 === questionAlternateAnswer2 || answerTest3 === questionAlternateAnswer2) {
      answer2.placeholder = questionAnswer2;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer2point;
      checkFamilySteal()
      playCorrect();
   }
   else if (answerTest1 === questionAnswer3 || answerTest2 === questionAnswer3 || answerTest3 === questionAnswer3 || answerTest1 === questionAlternateAnswer3 || answerTest2 === questionAlternateAnswer3 || answerTest3 === questionAlternateAnswer3) {
      answer3.placeholder = questionAnswer3;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer3point;
      checkFamilySteal()
      playCorrect();
   }
   else if (answerTest1 === questionAnswer4 || answerTest2 === questionAnswer4 || answerTest3 === questionAnswer4 || answerTest1 === questionAlternateAnswer4 || answerTest2 === questionAlternateAnswer4 || answerTest3 === questionAlternateAnswer4) {
      answer4.placeholder = questionAnswer4;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer4point;
      checkFamilySteal()
      playCorrect();
   }
   else if (answerTest1 === questionAnswer5 || answerTest2 === questionAnswer5 || answerTest3 === questionAnswer5 || answerTest1 === questionAlternateAnswer5 || answerTest2 === questionAlternateAnswer5 || answerTest3 === questionAlternateAnswer5) {
      answer5.placeholder = questionAnswer5;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer5point;
      checkFamilySteal()
      playCorrect();
   }
   else if (answerTest1 === questionAnswer6 || answerTest2 === questionAnswer6 || answerTest3 === questionAnswer6 || answerTest1 === questionAlternateAnswer6 || answerTest2 === questionAlternateAnswer6 || answerTest3 === questionAlternateAnswer6) {
      answer6.placeholder = questionAnswer6;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer6point;
      checkFamilySteal()
      playCorrect();
   }
   else if (answerTest1 === questionAnswer7 || answerTest2 === questionAnswer7 || answerTest3 === questionAnswer7 || answerTest1 === questionAlternateAnswer7 || answerTest2 === questionAlternateAnswer7 || answerTest3 === questionAlternateAnswer7) {
      answer7.placeholder = questionAnswer7;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer7point;
      checkFamilySteal()
      playCorrect();
   }
   else if (answerTest1 === questionAnswer8 || answerTest2 === questionAnswer8 || answerTest3 === questionAnswer8 || answerTest1 === questionAlternateAnswer8 || answerTest2 === questionAlternateAnswer8 || answerTest3 === questionAlternateAnswer8) {
      answer8.placeholder = questionAnswer8;
      scoreholder.value = parseInt(scoreholder.value) + questions[questionSelector].answer8point;
      checkFamilySteal()
      playCorrect();
   }
   else {
      playBuzzer();
      addStrike();
   }
}