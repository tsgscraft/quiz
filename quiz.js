let score = 0;
let currentQI = 0;

/* let question = {
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: ["Paris", "London", "Berlin", "New York"],
    correct: 2
}
*/

let questions = [
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        answers: ["Paris", "London", "Berlin", "New York"],
        correctI: 2
    },
    {
        question: "Mit was wurde die erste Minecraft version Progammiert?",
        answers: ["C++", "Java", "C#", "JS"],
        correctI: 1
    },
    {
        question: "Wer war der entwickler von Minecraft?",
        answers: ["Nofch", "Notch", "Mofch", "Motch"],
        correctI: 1
    },
];

function displayQ(){

    if (currentQI >= questions.length){
        document.getElementById("quiz-container").hidden = true;
        document.getElementById("result").hidden = false;
        document.getElementById("score").textContent = score;
        document.getElementById("max").textContent = questions.length;

        return;
    }

    let question = questions[currentQI];

    document.getElementById("question").textContent = question.question

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerB = document.createElement("button");
        answerB.textContent = answer;
        answerB.onclick = () => checkAnswer(index)
        answerB.classList.add("btn", "btn-secondary", "me-2");
        answersDiv.appendChild(answerB);
    });
}

displayQ();

function checkAnswer(userAnswer) {
    let correct = questions[currentQI].correctI;

    if (userAnswer == correct){
        score++;
    }

    next();
}

function next(){
    currentQI++;
    displayQ();
}

function restart(){
    currentQI = 0;
    score = 0;
    document.getElementById("quiz-container").hidden = false;
    document.getElementById("result").hidden = true;
    displayQ();
}
