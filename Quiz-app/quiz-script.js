const questions = [
    {
        question: 'Which country has the highest life expectancy?',
        answers: [
            { text: 'Bangladesh', correct: false },
            { text: 'India', correct: false },
            { text: 'Hong Kong', correct: true },
            { text: 'Japanese', correct: false },
        ]
    },
    {
        question: 'What is the most common surname in the United States?',
        answers: [
            { text: 'Johnson', correct: false },
            { text: 'Smith', correct: true },
            { text: 'Brown', correct: false },
            { text: 'Jones', correct: false },
        ]
    },
    {
        question: 'How many minutes are in a full week?',
        answers: [
            { text: '45,757', correct: false },
            { text: '1,52,454', correct: false },
            { text: '10,080', correct: true },
            { text: '15,967', correct: false },
        ]
    },
    {
        question: 'Aureolin is a shade of what color?',
        answers: [
            { text: 'Red', correct: false },
            { text: 'Blue', correct: false },
            { text: 'Yellow', correct: true },
            { text: 'Black', correct: false },
        ]
    },
    {
        question: 'How many faces does a Dodecahedron have?',
        answers: [
            { text: '11', correct: false },
            { text: '50', correct: false },
            { text: '5', correct: false },
            { text: '12', correct: true },
        ]
    },
    {
        question: 'What is the 4th letter of the Greek alphabet?',
        answers: [
            { text: 'Beta', correct: false },
            { text: 'Delta', correct: true },
            { text: 'Kappa', correct: false },
            { text: 'Zeta', correct: false },
        ]
    },
    {
        question: 'What software company is headquartered in Redmond, Washington?',
        answers: [
            { text: 'Microsoft', correct: true },
            { text: 'LeadSoft', correct: false },
            { text: 'SouthTech', correct: false },
            { text: 'Pell Software', correct: false },
        ]
    }
];

//--Few Inportent Vereable
const qustionElement = document.getElementById('question')
const answerButtons = document.getElementById('answerBtn')
const nextButton = document.getElementById('nextBtn')

let correntQuestionIndex = 0;
let score = 0;


function startQuiz() {      //--This Function will start the Quiz Game
    correntQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion()
}


function showQuestion() {      //--This Function will show the Quiz Question on dispaly.
    resetState();
    let currentQuestion = questions[correntQuestionIndex];
    let questionNo = correntQuestionIndex + 1;
    qustionElement.innerHTML = questionNo + '. ' + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {      //--This Function will Erase the Quiz question and answer.
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {      //--This Function will helpe to select the Answer button.
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++
    } else {
        selectedBtn.classList.add('inCorrect')
    }
    Array.from(answerButtons.children).forEach(button => {   // This block of code will auto select the Correct Answer
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}
function showScor() {      //--This Function  going to show Final Score.
    resetState()
    qustionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'
}
nextButton.addEventListener('click', () => {    // This block of code will helpe you to change the question if you click the Next button.
    if (correntQuestionIndex<questions.length) {
        correntQuestionIndex++
        if (correntQuestionIndex<questions.length) {
            showQuestion()

        } else {
            showScor();
        }
    } else {
        startQuiz();
    }
})

startQuiz();