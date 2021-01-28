

var start = document.getElementById("startButton")
var questions = document.getElementById("questions")
var timer = document.getElementById("timer")


let question = [





]



function startGame(){
    var time = 60
    var timerInterval = setInterval(function(){
     timer.textContent = time
        time--
      
        if(secondsLeft === 0) {
       
            clearInterval(timerInterval);
           
           
          }
          setTimeout(endGame, 60000)
        }, 1000);
    
    }






function endGame(){


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
