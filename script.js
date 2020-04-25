var timerCount = document.getElementById("timer-count");
var button = document.getElementsByClassName("btn");
var quizAnsList = document.getElementById("quiz-answer-list");
var quizBody = document.getElementById("quiz-body");

var quizList = [
  "What color is a banana?",
  "What is Autumn also known as?",
  "How many ounces in a pound?",
  "How many questions do you think there are?",
  "What variety of Hot Cheetos are the best?",
  "What is the best instant noodle brand?",
  "Was this homework difficult?",
  "On a scale of 1 to 5, how cool is coding?"
];
var ansList = [
  ["Yellow", "Purple", "Red", "Orange"],
  ["Summer", "Fall", "Spring", "Winter"],
  ["4oz", "42oz", "16oz", "10oz"],
  ["4", "10", "8", "5"],
  ["Regular", "Lime", "XXtra Hot", "Puffs"],
  ["Indomie", "Shin", "Nong Shim", "Maruchan"],
  ["Yes", "No"],
  ["1", "2", "3", "4", "5"]
];
var correctAns = [
  "Yellow",
  "Fall",
  "16oz",
  "8",
  "XXtra Hot",
  "Indomie",
  "Yes",
  "5"
];

var score = 0;
var timer = 300;
var secondsElasped = 0;
var interval;

function getTimer() {
  secondsLeft = timer - secondsElasped;
  timerCount.textContent = secondsLeft;
}
function stopTimer() {
  clearInterval(interval);
  timerCount.textContent = "Finished!";
}
function renderTimer() {
  if (timerCount.textContent > 0) {
    getTimer();
  } else {
    endQuiz();
  }
}

function startTimer() {
  if (timer > 0) {
    interval = setInterval(function() {
      secondsElasped++;
      renderTimer();
    }, 1000);
  }
}
function startQuiz() {
  startTimer();
  displayQuiz();
}

var btnStart = document.getElementById("btn-start");
btnStart.addEventListener("click", function() {
  startQuiz();
  btnStart.setAttribute("style", "display: none");
});

// Generate Question
function displayQuiz() {
  quizAnsList.innerHTML = "";
  var quizQuestion = document.getElementById("quiz-question");
  var num = Math.floor(Math.random() * quizList.length);
  quizQuestion.innerHTML = quizList[num];
  quizList.splice(num, 1);

  // Generate Answers
  for (var i = 0; i < ansList[num].length; i++) {
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn" + i);
    btn.textContent = ansList[num][i];
    quizAnsList.append(btn);
  }
  ansList.splice(num, 1);
  previ = num;
}
var btnNext = quizAnsList.addEventListener("click", function(event) {
  if (event.target.localName === "button") {
    // checkAnswer();

    nextQuestion();
  }
});

function finalResults() {}
// function checkAnswer() {
//   if (event.target.textContent == String) {
//     console.log("winner");
//   }
// }
function endQuiz() {
  stopTimer();
  quizBody.setAttribute("style", "display: none");
  console.log("fin");
}
function nextQuestion() {
  if (quizList.length > 0) {
    quizAnsList.innerHTML = "";
    var quizQuestion = document.getElementById("quiz-question");
    var num = Math.floor(Math.random() * quizList.length);
    quizQuestion.innerHTML = quizList[num];
    quizList.splice(num, 1);

    // Generate Answers
    for (var i = 0; i < ansList[num].length; i++) {
      var btn = document.createElement("button");
      btn.setAttribute("class", "btn" + i);
      btn.setAttribute("target", ansList[num][i]);
      btn.textContent = ansList[num][i];
      quizAnsList.append(btn);
    }
    ansList.splice(num, 1);
  } else {
    endQuiz();
  }
}
