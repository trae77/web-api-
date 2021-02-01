var start = document.getElementById("startButton")
var questions = document.getElementById("questions")
var timer = document.getElementById("timer")
var answerBtn = document.getElementsByClassName("answerBtn")
var score = document.getElementById("score")
var answer = []
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
    correctAnswer: "kareem abdul jabar"
  },
  {
    question: "tool used to make holes in wood?",
    answers: {
      a: "hammer ",
      b: "saw",
      c: "drill",
      d: "flashlight",
    },
    correctAnswer: "drill"
  },
  {
    question: "color of the sky?",
    answers: {
      a: "purple",
      b: "red",
      c: "orange",
      d: "blue"
    },
    correctAnswer: "blue"
  }
];

   
      
start.addEventListener("click", function(){
   
         let i = 0 
              
    questions.textContent = myQuestions[i].question
     aButton.textContent = myQuestions[i].answers.a
     bButton.textContent = myQuestions[i].answers.b
     cButton.textContent = myQuestions[i].answers.c
     dButton.textContent = myQuestions[i].answers.d

  


     
     aButton.addEventListener('click',  function(){
          answer.append(myQuestions[i].answers.a)
          checkAnswer()
          i++
     });


         bButton.setAttribute('href', "#");
         bButton.addEventListener('click',  function(){
          answer.append(myQuestions[i].answers.b) 
          checkAnswer()
          i++
         } );
         cButton.setAttribute('href', "#");
         cButton.addEventListener('click',  function(){
          answer.append(myQuestions[i].answers.c)
          checkAnswer()
          i++
         });
         dButton.setAttribute('href', "#");
         dButton.addEventListener('click',  function(){
          answer.append(myQuestions[i].answers.d)
          checkAnswer()
          i++
         });
          
    
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

              
          function checkAnswer () {
 
      if ( answer[i] = myQuestions[i].correctAnswer){
        score.textContent = score + 100
         }else{
        time = time - 10
      }
 
        }
        })
