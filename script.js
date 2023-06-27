var start = document.getElementById("startButton")
var questions = document.getElementById("questions")
var timer = document.getElementById("timer")
var answerBtn = document.getElementsByClassName("answerBtn")
var score = document.getElementById("score")
var Highscore = document.getElementById("Highscore")
var answer = []
var aButton = document.getElementById("a")
var bButton = document.getElementById("b")
var cButton = document.getElementById("c")
var dButton = document.getElementById("d")

var answerHolder = ""
var points = 0
score.textContent = points;

// update highscore
// template literals https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/

//https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance
function allStorage() {

  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
    
  }
  
  var topScore = 0
  for (let i = 0; i < values.length; i++) {
   
    if (values[i] > topScore){
      topScore = `${keys[i]} ${values[i]}`;
    }
    
  }

  return topScore;
}
Highscore.textContent = allStorage() ;




let myQuestions = [
  {
    question: "Who is the Nba all time leading scorer",
    answers: {
      a: "lebron james",
      b: "kareem abdul jabar",
      c: "steph curry",
      d: "kawhi leanord",
    },
    correctAnswer: "lebron james"
  },
  {
    question: "which tool is used to make holes in wood?",
    answers: {
      a: "hammer ",
      b: "saw",
      c: "drill",
      d: "flashlight",
    },
    correctAnswer: "drill"
  },
  {
    question: "what is the color of the sky?",
    answers: {
      a: "purple",
      b: "red",
      c: "orange",
      d: "blue"
    },
    correctAnswer: "blue"
  },
//   {
//   //   // new question
//   //   question: "Nba all time leading scorer",
//   //   answers: {
//   //     a: "lebron james",
//   //     b: "kareem abdul jabar",
//   //     c: "steph curry",
//   //     d: "kawhi leanord",
//   //   },
//   //   correctAnswer: "kareem abdul jabar"
//   // }
];

let i = 0

start.addEventListener("click", function Game() {


  function refresh() {
   
    if (i === 3) {
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
    if (myQuestions[i].answers.b == myQuestions[i].correctAnswer) {
      points = points += 50;
      score.textContent = points;
      i = i += 1
      refresh();
    } else {
      time = time - 10
      i = i += 1
    }

    refresh();



  });
  cButton.setAttribute('href', "#");
  cButton.addEventListener('click', function () {
    answer.push(myQuestions[i].answers.c)
    if (myQuestions[i].answers.c == myQuestions[i].correctAnswer) {
      points = points += 50;
      score.textContent = points;
      i = i += 1
      refresh();
    } else {
      time = time - 10
      i = i += 1
    }
    refresh();




  });
  dButton.setAttribute('href', "#");
  dButton.addEventListener('click', function () {
    if (myQuestions[i].answers.d == myQuestions[i].correctAnswer) {
      points = points += 50;
      score.textContent = points;
      i = i += 1
      refresh();
    } else {
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
    // end timer
    // highscore page
    alert("game over");
    // stops time 
    clearInterval(timerInterval);
    timer.textContent = "game over";

    if (score >= Highscore) {
      var HS = prompt("You set a highscore please enter initials");
      localStorage.setItem(HS, points);
    }


  }



})
