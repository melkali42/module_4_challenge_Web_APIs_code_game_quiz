const questions = [
    {
      question: "A random number can be created by ________________?",
      options: ["Math.random", "math./random", "Math.floor", "Math.Floor"],
      answer: 0
    },
    {
      question: "How do you write an IF statement in JavaScript?",
      options: ["if i ==5 then", "if i = 5 then", "if (i === 5)", "if i = 5"],
      answer: 1
    },
    {
      question: "String values must be enclosed in ________ when being assigned to variable",
      options: ["quotations", "commas", "parenthesis", "curly brackets"],
      answer: 0
    },
    {
      question: "Inside the HTML document, where do you place the JavaScript code?",
      options: ["inside the <footer> element", "inside the <header> element", "inisde the <link> element", "inside the <script> element"], 
      answer: 3
    }

  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 45;
  let timerInterval;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const timerElement = document.getElementById("time-remaining");
  const startButton = document.getElementById("start");
  const nextButton = document.getElementById("next");
  
  // Function to start the quiz
  function startQuiz() {
    startButton.style.display = "none";
    showQuestion();
    startTimer();
  }
  
  // Function to display the current question
  function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    
    // Clear previous options
    optionsElement.innerHTML = "";
    
    // Create radio buttons for each option
    for (let i = 0; i < question.options.length; i++) {
      const option = question.options[i];
      const li = document.createElement("li");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = i;
      li.appendChild(radio);
      li.appendChild(document.createTextNode(option));
      optionsElement.appendChild(li);
    }
  }
  
  // Function to handle user's answer
  // Function to handle user's answer
function handleAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
  
    if (!selectedOption) {
      return; // No option selected
    }
  
    const selectedAnswer = parseInt(selectedOption.value);
  
    if (selectedAnswer === questions[currentQuestion].answer) {
      score++; // Increment score if answer is correct
    } else {
      // Decrease timer by 5 seconds if answer is wrong
      timeLeft -= 5;
      if (timeLeft < 0) {
        timeLeft = 0; // Ensure timer doesn't go below 0
      }
    }
  
    // Move to the next question
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
    
    // Move to the next question
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
      timerElement.textContent = timeLeft;
      
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    clearInterval(timerInterval);
    questionElement.textContent = "Quiz Ended";
    optionsElement.innerHTML = "";
    
    // Calculate and display the final score
    const finalScore = Math.round((score / questions.length) * 100);
    const scoreMessage = `Your Score: ${finalScore}%`;
    optionsElement.textContent = scoreMessage;
    
    // Show the start button to restart the quiz
    startButton.style.display = "block";
  }
  
  // Event listeners
  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", handleAnswer);

  const highScoresContainer = document.getElementById("high-scores-container");
const highScoresList = document.getElementById("high-scores-list");
const highScoresKey = "highScores";
let highScores = [];

// Retrieve high scores from local storage
function getHighScores() {
  const storedScores = localStorage.getItem(highScoresKey);
  if (storedScores) {
    highScores = JSON.parse(storedScores);
  }
}

// Save high scores to local storage
function saveHighScores() {
  localStorage.setItem(highScoresKey, JSON.stringify(highScores));
}

// Function to display the high scores
function displayHighScores() {
  highScoresList.innerHTML = "";

  highScores.forEach((score) => {
    const li = document.createElement("li");
    li.textContent = `${score.name}: ${score.score}`;
    highScoresList.appendChild(li);
  });
}

// Function to add a high score
function addHighScore(name, score) {
  const newScore = { name, score };
  highScores.push(newScore);
  highScores.sort((a, b) => b.score - a.score);
  saveHighScores();
  displayHighScores();
}

// Example usage:
// Call addHighScore() function with name and score when a player finishes the quiz and achieves a high score

// Call getHighScores() and displayHighScores() functions to populate and display the high scores
getHighScores();
displayHighScores();

  
    