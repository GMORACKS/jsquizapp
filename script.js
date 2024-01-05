const questions = [
    {
        question: ". What method can be used to find the length of a string in JavaScript?",
        answers: [
            { text:"Size", correct: false},
            { text: "length()", correct: true},
            { text:"len()", correct: false},
            { text: "breadth", correct: false},      
        ]
    },
    {
        question: "Which operator is used to assign values in JavaScript?",
        answers: [
            { text:"*", correct: false},
            { text: "/", correct: false},
            { text:"=", correct: true},
            { text: "===", correct: false},          
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text:") function:myFunction() ", correct: false},
            { text: "function = myFunction()", correct: false},
            { text:"function myFunction()", correct: true},
            { text: "myFunction:function()", correct: false},
                    
        ]
    },
    {
        question: " What is a string?",
        answers: [
            { text:"An array of characters", correct: false},
            { text: "A sequence of characters", correct: false},
            { text:" Both a & b", correct: true},
            { text: "None of the above", correct: false},
                    
        ]
    },
    {
        question: "Which method can be used to turn a number into a string?",
        answers: [
            { text:"toString()", correct: true},
            { text: "stringify()", correct: false},
            { text:" toNumber()", correct: false},
            { text: "convertString()", correct: false},        
        ]
    },
    {
        question: "Which tag is used to force the browser to display the next text or element on a new line?",
        answers: [
            { text:"<br>", correct: true},
            { text: "<break>", correct: false},
            { text:" <line>", correct: false},
            { text: "<nl>", correct: false},        
        ]
    },
    {
        question: "How do you create a new paragraph in HTML?",
        answers: [
            { text:"<br>", correct: false},
            { text: "<p>", correct: true},
            { text:"<break>", correct: false},
            { text: "<newp>", correct: false},        
        ]
    },
    {
        question: "Which of the following tags is used for the largest heading?",
        answers: [
            { text:"<head>", correct: false},
            { text: "<heading>", correct: false},
            { text:"<h6>", correct: false},
            { text: "<h1>", correct: true},        
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState(); 
    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; 


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
        nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =    `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"; 
}
function handleNextButton(){
    currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    showQuestion();
}else{
    showScore();
}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});

 startQuiz();