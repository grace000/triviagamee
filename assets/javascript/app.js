
$(document).ready(function() {

//global variables
//-----------------------------------------------------------------------
var counter = 30;
var theClock;

// Number of questions
var numQues = 4;

// Number of choices in each question
var numChoi = 3;

// Answers to questions
var answers = ["Barber","Peppermint Patty", "Freeda","Beethoven"];

//Timer 
//----------------------------------------------------------------------

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        
        seconds = parseInt(timer % 60, 10);

        
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(seconds + "s");

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var oneMinute = 60,
        display = $('#time');
    startTimer(oneMinute, display);
});


//Scoring user input
// ----------------------------------------------------------------------
function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}

}