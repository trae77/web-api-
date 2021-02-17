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
var points = 0
score.textContent =  points ;

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

let i = 0

start.addEventListener("click", function Game() {

  
  function refresh() {
    console.log(i);
    if ( i === 3) {
      endGame();
    }
    questions.textContent = myQuestions[i].question
    aButton.textContent = myQuestions[i].answers.a
    bButton.textContent = myQuestions[i].answers.b
    cButton.textContent = myQuestions[i].answers.c
    dButton.textContent = myQuestions[i].answers.d
  }
  
  refresh()






  aButton.setAttribute('href', "#");
  aButton.addEventListener('click', function () {
    time = time - 10
    
    i = i += 1
    refresh()
    


  });


  bButton.setAttribute('href', "#");
  bButton.addEventListener('click', function () {
    if(myQuestions[i].answers.b == myQuestions[i].correctAnswer){
      points = points += 50;
      score.textContent =  points ;
      i = i += 1
      refresh();
    } else{
      time = time - 10
      i = i += 1
    } 
  
    refresh();
   


  });
  cButton.setAttribute('href', "#");
  cButton.addEventListener('click', function () {
    answer.push(myQuestions[i].answers.c)
    if(myQuestions[i].answers.c == myQuestions[i].correctAnswer){
      points = points += 50;
      score.textContent =  points ;
      i = i += 1
      refresh();
    } else{
      time = time - 10
      i = i += 1
    } 
    refresh();
   
  


  });
  dButton.setAttribute('href', "#");
  dButton.addEventListener('click', function () {
    if(myQuestions[i].answers.d == myQuestions[i].correctAnswer){
      points = points += 50;
      score.textContent =  points ;
      i = i += 1
      refresh();
    } else{
      time = time - 10
      i = i += 1
    } 
    refresh();
   


  });


  var time = 60
  var timerInterval = setInterval(function () {
    timer.textContent = time
    time--

    if (time === 0) {

      clearInterval(timerInterval);
     
      endGame();

      return

    }
    setTimeout(endGame, 60000)
  }, 1000);



  function endGame() {
    clearInterval(timerInterval);
console.log("end");

   
  }



})
