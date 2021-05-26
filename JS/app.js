const questions = [
  {
    question: "What is the first day of the week?",
    answers: [
      { text: "monday", correct: true },
      { text: "friday", correct: false },
      { text: "saturday", correct: false },
      { text: "sunday", correct: false },
    ],
  },
  {
    question: "Which is the most genuine day of worship?",
    answers: [
      { text: "monday", correct: false },
      { text: "sunday", correct: false },
      { text: "saturday", correct: false },
      { text: "friday", correct: true },
    ],
  },
  {
    question: "What day was Adam created?",
    answers: [
      { text: "friday", correct: true },
      { text: "saturday", correct: false },
      { text: "sunday", correct: false },
      { text: "monday", correct: false },
    ],
  },
  {
    question: "Sunday is a special day for celebration of?",
    answers: [
      { text: "God", correct: false },
      { text: "Jesus Christ", correct: false },
      { text: "The Sun", correct: true },
      { text: "Mankind", correct: false },
    ],
  },
  {
    question: "How many wives did Adam have?",
    answers: [
      { text: "Two", correct: true },
      { text: "One and one alone", correct: false },
      { text: "It is not written", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
];

//selectors

const quizContainer = document.querySelector('.quiz-wrapper')
const questionText = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const nextButton = document.getElementById("next-btn");
const marks = document.querySelector('.marks')
const scores = document.querySelector('.score')

let currentQuestionIndex = 0,
  num = 1;
let score = 0;

marks.innerHTML = score;

//selectors

//eventListeners

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;//allows the user to access the next question on clicking the next button
  if (currentQuestionIndex < questions.length) {
    startQuiz();//calls the startQuiz function
  } else {
    getScore
    quizContainer.classList.add('hide')
    scores.style.display = "flex"
  }
});

//eventListeners

//functions

startQuiz();
function startQuiz() {
  resetState();
  setQuestion(questions[currentQuestionIndex]);
}

function setQuestion(question) {
  questionText.innerHTML = `${num++}. ${question.question}`;
//create an answer elemenet and append it to the answer container
  question.answers.forEach((answer) => {
    const answerElement = document.createElement("p");
    answerElement.classList.add("answer");
    answerElement.innerText = answer.text;
    if (answer.correct) {
      answerElement.dataset.correct = answer.correct;
    }
    answerElement.addEventListener("click", selectAnswer);
    answerContainer.appendChild(answerElement);
  });
}

function selectAnswer(e) {
  const selectedAnswer = e.target;//select a specific answer element
  const answers = Array.from(document.querySelectorAll('.answer')) //change answer elements into arrays
  console.log(answers);
  const correct = selectedAnswer.dataset.correct; //create a data attribute of correct
  if (correct) {
    selectedAnswer.style.background = "green"; //a right answer
    getScore();
  }
  else {
    selectedAnswer.style.background = "red" //a wrong answer
  }
  
  //once an answer is clicked whether wrong or right, this piece of code renders the answer container unclickable
  if (selectedAnswer) {
    answers.forEach((answer) => {
      answer.classList.add('not-allowed')
    })
  }
}

// to remove redundant elements in the answer container
function resetState() {
  while (answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild);
  }
}

function getScore() {
  score++
  scores.innerHTML = `You scored ${score} / ${questions.length} <button onclick="location.reload()">Reload</button>`
}
//functions
