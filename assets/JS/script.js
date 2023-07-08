// Placeholder and timer
let questionsNumber = 0;
let seconds = 45;

const timer = document.getElementById('timer');
let timerInterval;
let temporaryMessageTimeout;

const quizHeader = document.getElementById('quiz-header');
const questions = document.getElementById('questions');

//Questions and Answers, setting up the variables
const quizQuestions = [
    {
        question: "A randon number can be created by ________________",
        answers: ["Math.random", "math./random", "Math.floor", "Math.Floor"],
        correctAnswer: 1
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        answers: ["if i ==5 then", "if i = 5 then", "if (i === 5)", "if i = 5"],
        correctAnswer: 2
    },
    {
        question: "String values must be enclosed in ___________ whn being assigned to variables",
        answers: ["quotations", "commas", "parenthesis", "curly brackets"], 
        correctAnswer: 1
    },
    {
        question: "Inside the HTML document, where do you place the JavaScript code?",
        answers: ["in the <footer> element", "inside the <script> element", "inside the <link> element", "inside the <header> element"],
        correctAnswer: 2
    },
]
    function setQuestion(num) {
        quizHeader.textContent = quizQuestions[num].question;
        const answers = quizQuestions[num].answers;
        document.getElementById('answer1').innerHTML = "1. " + answers[0]
        document.getElementById('answer2').innerHTML = "1. " + answers[1]
        document.getElementById('answer3').innerHTML = "1. " + answers[2]
        document.getElementById('answer4').innerHTML = "1. " + answers[3]
    }

    document.getElementById('start button').onclick = function () {
        questions.hidden = false;
        document.getElementById('starting-section').hidden = true;
        setQuestion(0);
        timerInterval = setInterval(function () {
            timer.innerHTML = --seconds;
        }, 1000);
    }
    // add correct or wrong statement
    function showTemporaryMessage(type){
        if(type === "correct"){
            document.getElementById('correct').hidden = false;
            document.getElementById('wrong').hidden = true;
        } else {
            document.getElementById('correct').hidden = true;
            document.getElementById('wrong').hidden = false;
        }
        document.getElementById('temp-results').hidden = false;
        temporaryMessageTimeout = setTimeout(function (){
            document.getElementById('temp-results').hidden = true;
        }, 2000)
    }
    