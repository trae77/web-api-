var start = document.getElementById("startButton")
var questions = document.getElementById("questions")
var timer = document.getElementById("timer")
var answerBtn = document.getElementsByClassName("answerBtn")
var score = document.getElementById("score")
var aButton = document.getElementById("a")

var bButton = document.getElementById("b")
var cButton = document.getElementById("c")
var dButton = document.getElementById("d")

var answerHolder = ""


let myQuestions = [
  {
    question: "Nba all time leading scorer",
    answers: {
      a: "lebron james",
      b: "kareem abdul jabar",
      c: "steph curry",
      d: "kawhi leanord",
    },
    correctAnswer: "b"
  },
  {
    question: "tool used to make holes in wood?",
    answers: {
      a: "hammer ",
      b: "saw",
      c: "drill",
      d: "flashlight",
    },
    correctAnswer: "c"
  },
  {
    question: "color of the sky?",
    answers: {
      a: "purple",
      b: "red",
      c: "orange",
      d: "blue"
    },
    correctAnswer: "d"
  }
];

//console.log(myQuestions[0].answers.a)
let i = 0
function startGame(){
  
   aButton.textContent = myQuestions[i].question.a
   bButton.textContent = myQuestions[i].question.b
   cButton.textContent = myQuestions[i].question.c
   dButton.textContent = myQuestions[i].question.d
    i++
    var time = 60
    var timerInterval = setInterval(function(){
     timer.textContent = time
        time--
     
        if(time === 0) {
       
            clearInterval(timerInterval);
           alert("game over");
           endGame();
           
           return
           
          }
          setTimeout(endGame, 60000)
        }, 1000);
    
    

function endGame(){


}

let index = 0
function check(answer) {
 
  questions.textContent = myQuestions[index].question
 
 if (answer === myQuestions[index].correctAnswer){
   score = score + 100
 }else{
   score = score - 50
 }
 
  i++
}

}

start.addEventListener("click", startGame());










// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```
