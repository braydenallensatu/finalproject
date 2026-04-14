const QUESTION_COUNT = 6;

const questionBank = [
  {
    category: "Golf",
    question: "How many holes are played in a standard round of golf?",
    answers: ["9", "12", "18", "24"],
    correctAnswer: "18",
    explanation: "A full traditional round of golf includes 18 holes."
  },
  {
    category: "Tennis",
    question: "What word is used in tennis when the score is 40-40?",
    answers: ["Match point", "Advantage", "Deuce", "Fault"],
    correctAnswer: "Deuce",
    explanation: "When both players reach 40, the score is called deuce."
  },
  {
    category: "Basketball",
    question: "How many points is a shot worth from beyond the three-point arc?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "3",
    explanation: "A made basket from beyond the arc counts for three points."
  },
  {
    category: "Skiing",
    question: "Which event is primarily associated with alpine skiing?",
    answers: ["Pommel horse", "Slalom", "Backstroke", "Steeplechase"],
    correctAnswer: "Slalom",
    explanation: "Slalom is a classic alpine skiing event focused on quick turns through gates."
  },
  {
    category: "Golf",
    question: "Which tournament is one of the four major championships in men's golf?",
    answers: ["The Masters", "The Ryder Cup", "The Players Championship", "The FedEx Cup"],
    correctAnswer: "The Masters",
    explanation: "The Masters is one of the four men's major golf championships."
  },
  {
    category: "Golf",
    question: "What is the term for one stroke under par on a hole?",
    answers: ["Bogey", "Birdie", "Eagle", "Ace"],
    correctAnswer: "Birdie",
    explanation: "A birdie means finishing a hole in one stroke under par."
  },
  {
    category: "Golf",
    question: "If a player scores 2 on a par-3 hole, what is that score called?",
    answers: ["Par", "Bogey", "Birdie", "Double bogey"],
    correctAnswer: "Birdie",
    explanation: "A 2 on a par-3 is one under par, which is a birdie."
  },
  {
    category: "Golf",
    question: "What do golfers usually yell when a ball is heading toward other people?",
    answers: ["Heads up", "Incoming", "Fore", "Watch it"],
    correctAnswer: "Fore",
    explanation: "Golfers yell 'Fore' as a warning when a ball may hit someone."
  },
  {
    category: "Golf",
    question: "What is the lowest score you can usually make on a single hole in regulation terms?",
    answers: ["Eagle", "Birdie", "Albatross", "Bogey"],
    correctAnswer: "Albatross",
    explanation: "An albatross is three under par on a hole and is extremely rare."
  },
  {
    category: "Tennis",
    question: "What surface is Wimbledon most famous for?",
    answers: ["Clay", "Grass", "Hard court", "Indoor carpet"],
    correctAnswer: "Grass",
    explanation: "Wimbledon is the most famous grass-court tournament in tennis."
  },
  {
    category: "Tennis",
    question: "How many sets does a player usually need to win in a best-of-three match?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation: "In a best-of-three format, winning two sets wins the match."
  },
  {
    category: "Tennis",
    question: "What is it called when a server wins a game without losing a point?",
    answers: ["Break game", "Love set", "Ace round", "Love game"],
    correctAnswer: "Love game",
    explanation: "A love game means the opponent did not win a single point in that game."
  },
  {
    category: "Tennis",
    question: "What score is announced as zero in tennis?",
    answers: ["Blank", "Love", "Nil", "Duck"],
    correctAnswer: "Love",
    explanation: "In tennis, zero is called love."
  },
  {
    category: "Tennis",
    question: "Carlos Alcaraz is best known for competing in which sport?",
    answers: ["Golf", "Tennis", "Soccer", "Formula 1"],
    correctAnswer: "Tennis",
    explanation: "Carlos Alcaraz is one of the top current players in men's tennis."
  },
  {
    category: "Basketball",
    question: "How many players from one team are on the court at a time in basketball?",
    answers: ["4", "5", "6", "7"],
    correctAnswer: "5",
    explanation: "Each basketball team has five players on the court at one time."
  },
  {
    category: "Basketball",
    question: "What is the name of the line used for uncontested foul shots?",
    answers: ["Three-point line", "Baseline", "Free-throw line", "Midcourt line"],
    correctAnswer: "Free-throw line",
    explanation: "Free throws are taken from the free-throw line."
  },
  {
    category: "Basketball",
    question: "What is the official name for moving the ball by bouncing it while you run?",
    answers: ["Passing", "Dribbling", "Pivoting", "Screening"],
    correctAnswer: "Dribbling",
    explanation: "Dribbling is the act of bouncing the ball while moving."
  },
  {
    category: "Basketball",
    question: "How many points is a standard free throw worth?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "1",
    explanation: "A made free throw is worth one point."
  },
  {
    category: "Basketball",
    question: "What is it called when a player grabs the ball after a missed shot?",
    answers: ["Rebound", "Steal", "Assist", "Block"],
    correctAnswer: "Rebound",
    explanation: "A rebound happens when a player secures the ball after a missed shot."
  },
  {
    category: "Skiing",
    question: "Which piece of equipment helps a skier turn and balance?",
    answers: ["Racket", "Bat", "Poles", "Helmet cam"],
    correctAnswer: "Poles",
    explanation: "Ski poles help with rhythm, balance, and movement."
  },
  {
    category: "Skiing",
    question: "What do skiers ride to get back up the mountain?",
    answers: ["Chairlift", "Escalator", "Subway", "Trolley"],
    correctAnswer: "Chairlift",
    explanation: "Chairlifts carry skiers back up the mountain between runs."
  },
  {
    category: "Skiing",
    question: "What does a black diamond trail usually mean?",
    answers: ["Beginner run", "Intermediate run", "Advanced run", "Closed run"],
    correctAnswer: "Advanced run",
    explanation: "Black diamond trails are typically marked for advanced skiers."
  },
  {
    category: "Skiing",
    question: "What are moguls on a ski slope?",
    answers: ["Snow ramps", "Bumps", "Ropes", "Avalanche signs"],
    correctAnswer: "Bumps",
    explanation: "Moguls are the bumps that form on a ski run."
  },
  {
    category: "Skiing",
    question: "Which international competition often features skiing events like downhill and slalom?",
    answers: ["The Super Bowl", "The Olympics", "The Masters", "The US Open"],
    correctAnswer: "The Olympics",
    explanation: "The Winter Olympics includes alpine skiing events such as downhill and slalom."
  }
];

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const feedbackBox = document.getElementById("feedback-box");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const scoreDisplay = document.getElementById("score");
const currentQuestionDisplay = document.getElementById("current-question");
const totalQuestionsDisplay = document.getElementById("total-questions");
const categoryPill = document.getElementById("category-pill");

let currentQuestionIndex = 0;
let score = 0;
let gameQuestions = [];

totalQuestionsDisplay.textContent = QUESTION_COUNT;

function shuffleItems(items) {
  const clonedItems = [...items];
  for (let i = clonedItems.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [clonedItems[i], clonedItems[randomIndex]] = [clonedItems[randomIndex], clonedItems[i]];
  }
  return clonedItems;
}

function buildGameQuestions() {
  return shuffleItems(questionBank)
    .slice(0, QUESTION_COUNT)
    .map((question) => ({
      ...question,
      answers: shuffleItems(question.answers)
    }));
}

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  gameQuestions = buildGameQuestions();
  scoreDisplay.textContent = score;
  nextButton.disabled = true;
  nextButton.textContent = "Next Question";
  feedbackBox.className = "feedback-box";
  feedbackBox.textContent = "Choose an answer to get started.";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = gameQuestions[currentQuestionIndex];
  currentQuestionDisplay.textContent = currentQuestionIndex + 1;
  categoryPill.textContent = currentQuestion.category;
  questionText.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.type = "button";
    button.addEventListener("click", () => selectAnswer(button, answer, currentQuestion));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.disabled = true;
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(selectedButton, selectedAnswer, question) {
  const isCorrect = selectedAnswer === question.correctAnswer;

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    if (button.textContent === question.correctAnswer) {
      button.classList.add("correct");
    }
  });

  if (isCorrect) {
    score += 1;
    scoreDisplay.textContent = score;
    selectedButton.classList.add("correct");
    feedbackBox.className = "feedback-box success";
    feedbackBox.textContent = `Correct. ${question.explanation}`;
  } else {
    selectedButton.classList.add("incorrect");
    feedbackBox.className = "feedback-box error";
    feedbackBox.textContent = `Not quite. ${question.explanation}`;
  }

  nextButton.disabled = false;
}

function showFinalScore() {
  resetState();
  categoryPill.textContent = "Finished";
  questionText.textContent = `You finished with ${score} out of ${gameQuestions.length} correct.`;
  feedbackBox.className = "feedback-box";
  if (score === 6) {
    feedbackBox.textContent = "Perfect 6 out of 6. Championship performance.";
  } else if (score >= 4) {
    feedbackBox.textContent = "Strong round. You were close to a perfect game.";
  } else if (score >= 2) {
    feedbackBox.textContent = "Solid effort. Run it back and see if you can reach 6 out of 6.";
  } else {
    feedbackBox.textContent = "Tough round, but that just means the comeback game is next.";
  }
  nextButton.textContent = "Play Again";
  nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex += 1;

  if (currentQuestionIndex < gameQuestions.length) {
    showQuestion();
  } else if (nextButton.textContent === "Play Again") {
    startGame();
  } else {
    showFinalScore();
  }
});

restartButton.addEventListener("click", startGame);

startGame();
