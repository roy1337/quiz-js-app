const quizData = [
{
question: "If you got this far, are you looking for a developer?",
a:"I'm looking for you.",
b:"I might..",
c:"Still thinking about it.",
d:"Nope.",
correct: "a",
},

{
 question: "Answered right? feel free to contact me.",
a:"Will do. right after the quiz.",
b:"Still testing around",
c:"Ahem..",
d:"No longer needed, Thanks!",
correct: "a",
},
{
question: "I hope you enjoyed the quiz, did you?",
a:"Heh.",
b:"Neh",
c:"Bahh.",
d:"Lovely experience! sure did.",
correct: "d",
},
];


const quiz = document.getElementById('quiz-container')
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn = document.getElementById('submit')
const header = document.getElementById('header')

let currQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    clearAll()

    const currQuizData = quizData[currQuiz]
    questionEl.innerText = currQuizData.question
    a_text.innerText = currQuizData.a
    b_text.innerText = currQuizData.b
    c_text.innerText = currQuizData.c
    d_text.innerText = currQuizData.d

    const currQuizdata = quizData[currQuiz]
    questionEl.innerText = currQuizData.question
}


submitbtn.addEventListener("click", moveOn);



function moveOn() {
    const answer = getSelectedAnswer()

    if(answer) {
        if(answer == quizData[currQuiz].correct) {
        score++
        }
    }

    if(currQuiz <= Object.keys(quizData.length)+1)
    { currQuiz++;
      loadQuiz() }

   else (FinishQuiz())
} 

function FinishQuiz() {
    
    quiz.innerHTML = `<h2> Congrats! You finished the quiz.<br>
    <br>You answered correctly at <u>${score} / ${quizData.length}</u> questions. <br>
    
    Feel free to start again, Check the code or contact me at:
    <br><a href="https://www.linkedin.com/in/royd/">LinkedIn</a>
    </h2>
    
    
    <button onclick="location.reload()">Start Over</button>`
    header.style.padding = "4rem"
}

function clearAll() {
    answerEl.forEach(answer => 
        answer.checked = false);
    
}

function getSelectedAnswer() {
    let answer 
    
    answerEl.forEach(answerCheckEl => {
        if(answerCheckEl.checked) {
            answer = answerCheckEl.id
        }
    })
    return answer
}