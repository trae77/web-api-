// var start = document.getElementById("startButton");
// var questions = document.getElementById("questions");
// var timer = document.getElementById("timer");
// var answerBtn = document.getElementsByClassName("answerBtn");
// var score = document.getElementById("score");
// var Highscore = document.getElementById("Highscore");
// var answer = [];
// var aButton = document.getElementById("a");
// var bButton = document.getElementById("b");
// var cButton = document.getElementById("c");
// var dButton = document.getElementById("d");

// var answerHolder = "";
// var points = 0;
// score.textContent = points;

// // update highscore
// // template literals https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/

// //https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance
// function allStorage() {
//   var values = [],
//     keys = Object.keys(localStorage),
//     i = keys.length;

//   while (i--) {
//     values.push(localStorage.getItem(keys[i]));
//   }

//   var topScore = 0;
//   for (let i = 0; i < values.length; i++) {
//     if (values[i] > topScore) {
//       topScore = `${keys[i]} ${values[i]}`;
//     }
//   }

//   return topScore;
// }
// Highscore.textContent = allStorage();

// let myQuestions = [
//   {
//     question: "Who is the Nba all time leading scorer",
//     answers: {
//       a: "lebron james",
//       b: "kareem abdul jabar",
//       c: "steph curry",
//       d: "kawhi leanord",
//     },
//     correctAnswer: "lebron james",
//   },
//   {
//     question: "which tool is used to make holes in wood?",
//     answers: {
//       a: "hammer ",
//       b: "saw",
//       c: "drill",
//       d: "flashlight",
//     },
//     correctAnswer: "drill",
//   },
//   {
//     question: "what is the color of the sky?",
//     answers: {
//       a: "purple",
//       b: "red",
//       c: "orange",
//       d: "blue",
//     },
//     correctAnswer: "blue",
//   },
//   //   {
//   //   //   // new question
//   //   //   question: "Nba all time leading scorer",
//   //   //   answers: {
//   //   //     a: "lebron james",
//   //   //     b: "kareem abdul jabar",
//   //   //     c: "steph curry",
//   //   //     d: "kawhi leanord",
//   //   //   },
//   //   //   correctAnswer: "kareem abdul jabar"
//   //   // }
// ];

// let i = 0;

// start.addEventListener("click", function Game() {
//   function refresh() {
//     if (i === 3) {
//       endGame();
//     }
//     questions.textContent = myQuestions[i].question;
//     aButton.textContent = myQuestions[i].answers.a;
//     bButton.textContent = myQuestions[i].answers.b;
//     cButton.textContent = myQuestions[i].answers.c;
//     dButton.textContent = myQuestions[i].answers.d;
//   }

//   refresh();

//   aButton.setAttribute("href", "#");
//   aButton.addEventListener("click", function () {
//     time = time - 10;

//     i = i += 1;
//     refresh();
//   });

//   bButton.setAttribute("href", "#");
//   bButton.addEventListener("click", function () {
//     if (myQuestions[i].answers.b == myQuestions[i].correctAnswer) {
//       points = points += 50;
//       score.textContent = points;
//       i = i += 1;
//       refresh();
//     } else {
//       time = time - 10;
//       i = i += 1;
//     }

//     refresh();
//   });
//   cButton.setAttribute("href", "#");
//   cButton.addEventListener("click", function () {
//     answer.push(myQuestions[i].answers.c);
//     if (myQuestions[i].answers.c == myQuestions[i].correctAnswer) {
//       points = points += 50;
//       score.textContent = points;
//       i = i += 1;
//       refresh();
//     } else {
//       time = time - 10;
//       i = i += 1;
//     }
//     refresh();
//   });
//   dButton.setAttribute("href", "#");
//   dButton.addEventListener("click", function () {
//     if (myQuestions[i].answers.d == myQuestions[i].correctAnswer) {
//       points = points += 50;
//       score.textContent = points;
//       i = i += 1;
//       refresh();
//     } else {
//       time = time - 10;
//       i = i += 1;
//     }
//     refresh();
//   });

//   var time = 60;
//   var timerInterval = setInterval(function () {
//     timer.textContent = time;
//     time--;

//     if (time === 0) {
//       clearInterval(timerInterval);

//       endGame();

//       return;
//     }
//     setTimeout(endGame, 60000);
//   }, 1000);

//   function endGame() {
//     // end timer
//     // highscore page
//     alert("game over");
//     // stops time
//     clearInterval(timerInterval);
//     timer.textContent = "game over";

//     if (score >= Highscore) {
//       var HS = prompt("You set a highscore please enter initials");
//       localStorage.setItem(HS, points);
//     }
//   }
// });


var start = document.getElementById("startButton");
var questions = document.getElementById("questions");
var timer = document.getElementById("timer");
var answerBtn = document.getElementsByClassName("answerBtn");
var score = document.getElementById("score");
var Highscore = document.getElementById("Highscore");
var answer = [];
var aButton = document.getElementById("a");
var bButton = document.getElementById("b");
var cButton = document.getElementById("c");
var dButton = document.getElementById("d");

var answerHolder = "";
var points = 0;
score.textContent = points;

function updateHighscore(score) {
  var currentHighscore = localStorage.getItem("highscore");

  if (!currentHighscore || score > currentHighscore) {
    var initials = prompt("You set a high score! Please enter your initials.");
    localStorage.setItem("highscore", score);
    localStorage.setItem("initials", initials);
  }
}

function displayHighscore() {
  var currentHighscore = localStorage.getItem("highscore");
  var initials = localStorage.getItem("initials");

  if (currentHighscore && initials) {
    Highscore.textContent = initials + ": " + currentHighscore;
  } else {
    Highscore.textContent = "No high score yet";
  }
}

function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  var topScore = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > topScore) {
      topScore = values[i];
    }
  }

  return topScore;
}

Highscore.textContent = allStorage();

let myQuestions = [
  {
    question: "Who is the NBA all-time leading scorer?",
    answers: {
      a: "LeBron James",
      b: "Kareem Abdul-Jabbar",
      c: "Stephen Curry",
      d: "Kawhi Leonard",
    },
correctAnswer: "a",
  },
  {
    question: "Which tool is used to make holes in wood?",
    answers: {
      a: "Hammer",
      b: "Saw",
      c: "Drill",
      d: "Flashlight",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the color of the sky?",
    answers: {
      a: "Purple",
      b: "Red",
      c: "Orange",
      d: "Blue",
    },
    correctAnswer: "d",
  },
];

let i = 0;
var time = 60;
var timerInterval;

function refresh() {
  if (i === myQuestions.length) {
    endGame();
  } else {
    questions.textContent = myQuestions[i].question;
    aButton.textContent = myQuestions[i].answers.a;
    bButton.textContent = myQuestions[i].answers.b;
    cButton.textContent = myQuestions[i].answers.c;
    dButton.textContent = myQuestions[i].answers.d;
  }
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === myQuestions[i].correctAnswer) {
    points += 50;
    score.textContent = points;
  } else {
    time -= 10;
  }

  i += 1;
  refresh();
}

function startGame() {
  start.disabled = true;

  refresh();

  aButton.addEventListener("click", function () {
    checkAnswer("a");
  });

  bButton.addEventListener("click", function () {
    checkAnswer("b");
  });

  cButton.addEventListener("click", function () {
    checkAnswer("c");
  });

  dButton.addEventListener("click", function () {
    checkAnswer("d");
  });

  timerInterval = setInterval(function () {
    timer.textContent = time;
    time--;

    if (time === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  timer.textContent = "Game Over";

  updateHighscore(points);
  displayHighscore();

  start.disabled = false;
}

start.addEventListener("click", startGame);
