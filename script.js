var timerCount = document.getElementById("timer-count");
var button = document.getElementsByClassName("btn");
var quizAnsList = document.getElementById("quiz-answer-list");
var quizBody = document.getElementById("quiz-body");
var finalResults = document.getElementById("final-results");
var highScore = document.getElementById("high-score-board");

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
var highScores = [];
highScores = JSON.parse(localStorage.getItem("codeQuizScores"));

var score = 0;
var timer = 300;
var secondsElasped = 0;
var interval;
var playerScore;
var localTimer;

function getTimer() {
  secondsLeft = timer - secondsElasped;
  timerCount.textContent = secondsLeft;
}
function stopTimer() {
  clearInterval(interval);
}
function renderTimer() {
  if (timerCount.textContent > 0) {
    getTimer();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timer = 300;
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
  highScore.setAttribute("style", "display: none");
});

// Generate Question
function displayQuiz() {
  quizAnsList.innerHTML = "";
  var quizQuestion = document.getElementById("quiz-question");
  var num = Math.floor(Math.random() * quizList.length);
  document.getElementById("quiz-num").textContent = 9 - quizList.length + ".";
  quizQuestion.innerHTML = quizList[num];
  quizList.splice(num, 1);

  // Generate Answers
  for (var i = 0; i < ansList[num].length; i++) {
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn");
    btn.textContent = ansList[num][i];
    quizAnsList.append(btn);
  }
  ansList.splice(num, 1);
  previ = num;
}
var btnNext = quizAnsList.addEventListener("click", function(event) {
  if (event.target.localName === "button") {
    checkAnswer();
    nextQuestion();
  }
});

// function showResults() {}
function checkAnswer() {
  if (correctAns.includes(event.target.textContent)) {
    score++;
    console.log("correct " + score);
  } else {
    console.log("wrong");
  }
}
function endQuiz() {
  stopTimer();
  quizBody.setAttribute("style", "display: none");
  var results = document.createElement("div");
  results.setAttribute("class", "final-result");
  results.textContent = "Your final score is: " + score + "/" + 8;
  finalResults.append(results);
  var resultBoard = document.createElement("div");
  resultBoard.setAttribute("class", "result-board");
  finalResults.append(resultBoard);
  var nameInput = document.createElement("input");
  nameInput.setAttribute("class", "name-input");
  nameInput.setAttribute("placeholder", "Input Name");
  resultBoard.append(nameInput);
  var saveBtn = document.createElement("button");
  saveBtn.setAttribute("class", "btn-short");
  saveBtn.innerHTML = "Save Score";
  resultBoard.append(saveBtn);
  var againBtn = document.createElement("button");
  againBtn.setAttribute("class", "btn-short");
  againBtn.innerHTML = "Play Again!";
  resultBoard.append(againBtn);
  saveBtn.addEventListener("click", function() {
    var name;
    name = nameInput.value;
    var user;
    user = name + "," + score;
    highScores = JSON.parse(localStorage.getItem("codeQuizScores"));
    highScores.push(user);
    localStorage.setItem("codeQuizScores", JSON.stringify(highScores));
    console.log(localStorage.getItem("codeQuizScores"));
  });
  againBtn.addEventListener("click", function() {
    location.reload();
  });
}

function nextQuestion() {
  if (quizList.length > 0) {
    quizAnsList.innerHTML = "";
    var quizQuestion = document.getElementById("quiz-question");
    var num = Math.floor(Math.random() * quizList.length);
    document.getElementById("quiz-num").textContent = 9 - quizList.length + ".";

    quizQuestion.innerHTML = quizList[num];
    quizList.splice(num, 1);

    // Generate Answers
    for (var i = 0; i < ansList[num].length; i++) {
      var btn = document.createElement("button");
      btn.setAttribute("class", "btn");
      btn.textContent = ansList[num][i];
      quizAnsList.append(btn);
    }
    ansList.splice(num, 1);
  } else {
    endQuiz();
  }
}

document.getElementById("high-score-btn").addEventListener("click", function() {
  if (highScore.style.display === "") {
    highScore.querySelectorAll("#high-score-name").forEach(n => n.remove());
    highScore.setAttribute("style", "display: initial");
    for (var i = 0; i < highScores.length; i++) {
      var div = document.createElement("div");
      div.setAttribute("id", "high-score-name");
      // var highScoreName = JSON.parse(localStorage.getItem("codeQuizScores"))[i];
      var highScoreName = JSON.parse(localStorage.getItem("codeQuizScores"))[
        i
      ].split(",")[0];
      var highScoreValue = JSON.parse(localStorage.getItem("codeQuizScores"))[
        i
      ].split(",")[1];
      div.textContent =
        i + 1 + ". " + highScoreName + " - " + highScoreValue + " points.";
      highScore.append(div);
    }
  } else {
    highScore.setAttribute("style", "display: ");
  }
});
