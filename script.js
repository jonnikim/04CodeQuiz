// var quizQuestion = document.getElementById("quiz-question").innerHTML;
var timerCount = document.getElementById("timer-count").textContent;
var button = document.getElementsByClassName("btn");

var quizList = [
  "What color is a banana?",
  "What is Autumn also known as?",
  "Will you give me an 'A'?",
  "How many questions do you think there are?",
  "What variety of Hot Cheetos are the best?",
  "What is the best instant noodle brand?",
  "Was this homework difficult?",
  "How many weeks are left?"
];
var score = 0;
var timer = 300;
// var correct = event.target.getAttribute("correct");

// If answer is correct. ++point
// document.getElementsByClassName("btn").addEventListener("click", function() {
//   if ((answer = correct)) {
//     score++;
//     nextQuestion();
//   } else {
//     subtractTimer();
//     nextQuestion();
//   }
//   timerCount = timer;
// });

document.addEventListener("click", function() {
  var quizQuestion = document.getElementById("quiz-question");
  var num = Math.floor(Math.random() * quizList.length);
  quizQuestion.innerHTML = quizList[num];
  quizList.splice(num, 1);
  console.log(quizList);
});
