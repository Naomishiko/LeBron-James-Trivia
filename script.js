
const questions = [
  {
      question: "How many points did LeBron score in his first NBA game ?",
       optionA: "18", 
       optionB: "30", 
       optionC: "25", 
       optionD: "16",
      correctOption: "optionC",
  
  },

  {
      question: "How old is LeBron James?",
      optionA: "25",
      optionB: "37",
      optionC: "28",
      optionD: "40",
      correctOption: "optionB"
  },

  {
      question: "When did LeBron go to his first NBA finals?",
      optionA: "2010",
      optionB: "2012",
      optionC: "2006",
      optionD: "2007",
      correctOption: "optionD"
  },

  {
      question: "What is the name of LeBron James wife?",
      optionA: "Gabrielle Union",
      optionB: "Samantha James",
      optionC: "Savannah James",
      optionD: "Kelly James",
      correctOption: "optionC"
  },

  {
      question: "How many kids James have?",
      optionA: "5",
      optionB: "6",
      optionC: "4",
      optionD: "3",
      correctOption: "optionD"
  },

  {
      question: "How many championships does LeBron have?",
      optionA: "4",
      optionB: "5",
      optionC: "6",
      optionD: "3",
      correctOption: "optionA"
  },

  {
      question: "For which NBA team did LeBron play his rookie season?",
      optionA: "Miami Heat",
      optionB: "Boston Celtics",
      optionC: "Cleveland Cavaliers",
      optionD: "New York Knicks",
      correctOption: "optionC"
  },

  {
      question: "What high school sport did LeBron Play along with basketball?",
      optionA: "Football",
      optionB: "Soccer",
      optionC: "Africa",
      optionD: "Baseball",
      correctOption: "optionA"
  },

  {
      question: "What is the name of James mother?",
      optionA: "Joan",
      optionB: "Jane",
      optionC: "Mary",
      optionD: "Gloria",
      correctOption: "optionD"
  },

  {
      question: "In what city, did LeBron James and Savannah Brinson get married?",
      optionA: "Los Angeles",
      optionB: "Akron",
      optionC: "Miami Beach",
      optionD: "San Diego",
      correctOption: "optionD"
  },

  {
      question: "LeBron signed with what company for $90 million?",
      optionA: "Puma",
      optionB: "Adidas",
      optionC: "Nike",
      optionD: "Reebok",
      correctOption: "optionC"
  },

  {
      question: "Which charity does LeBron support?",
      optionA: "Children's Defense Fund",
      optionB: "Love",
      optionC: "Children's Basketball",
      optionD: "Capital",
      correctOption: "optionA"
  },


  {
      question: "When is LeBron's birthday?",
      optionA: "December 17th",
      optionB: "December 30th",
      optionC: "December 17th",
      optionD: "January 1st",
      correctOption: "optionB"
  },

  {
      question: "LeBron was the youngest player in league history to be awarded which of the following?",
      optionA: "ALL-star Honors",
      optionB: "NBA star Honors",
      optionC: "Western Honors",
      optionD: "All-NBA Honors",
      correctOption: "optionD"
  },

  {
      question: "What is the name of one of LeBron James's son?",
      optionA: "Bronny",
      optionB: "Paul",
      optionC: "Mike",
      optionD: "Jonny",
      correctOption: "optionA"
  },

  {
      question: "What state is LeBron from?",
      optionA: "Miami",
      optionB: "California",
      optionC: "Ohio",
      optionD: "Arizona",
      correctOption: "optionC"
  },

  {
      question: "Who Drafted LeBron?",
      optionA: "Cleveland Cavaliers",
      optionB: "LA Lakers",
      optionC: "Phoenix Suns",
      optionD: "Miami Heat",
      correctOption: "optionA"
  },

  {
      question: "What college did LeBron go to?",
      optionA: "Duke",
      optionB: "Ohio State",
      optionC: "Didn't go to college",
      optionD: "Arizona State",
      correctOption: "optionC"
  },

  {
      question: "What is LeBron James number for the LA Lakers?",
      optionA: "19",
      optionB: "22",
      optionC: "24",
      optionD: "23",
      correctOption: "optionD"
  },

  {
      question: "Which team did LeBron win his first NBA Championship with?",
      optionA: "Miami Heat",
      optionB: "Orlando Magic",
      optionC: "Indiana Pacers",
      optionD:  "Cleveland Cavaliers",
      correctOption: "optionA"
  },

  {
      question: "What is the current nickname of LeBron?",
      optionA: "Speed",
      optionB: "Shooter",
      optionC: "Jumper",
      optionD: "King James",
      correctOption: "optionD"
  },


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
  //function to shuffle and push 10 questions to shuffledQuestions array
  while (shuffledQuestions.length <= 20) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })
 
  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}



//called when the next button is called
function handleNextQuestion() {
  checkForAnswer()
  unCheckRadioButtons()
  //delays next question displaying for a second
  setTimeout(() => {
      if (indexNumber <= 20) {  //next question. Keeps it going
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()
      }
      resetOptionBackground()
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // condition check for player remark and remark color
  if (playerScore <= 3) {
      remark = "Bad Grades, Keep Practicing."
      remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 7) {
      remark = "Average Grades, You can do better."
      remarkColor = "orange"
  }
  else if (playerScore >= 7) {
      remark = "Excellent, Keep the good work going."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 21) * 100

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-mo6dal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}