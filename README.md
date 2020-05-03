# 04CodeQuiz

https://jonnikim.github.io/04CodeQuiz/

For week 4's homework, we were tasked to create a Code Quiz with a timer that will end the quiz if time runs out. The quiz's results can then be stored as a name and high score in an array. List of high scores can also be viewed. High Scores list will get localStorage and JSON.parse() it to be read as an array.

Using several an equal number of questions and answers in two separate arrays, respectively, and an array of answers (an answer sheet), these were used along with a for loop to grab the same question + answers by its array index. Then checked to see if chosen answer is included in answer sheet. If answer is correct, score is increased.

At the end of the quiz, the player is presented with an input for their name. They can either save and/or play again. Saving will push the name and score in an array which is then JSON.stringify'd to be set in a localStorage. Playing again will restart the game.

## Credit

https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
