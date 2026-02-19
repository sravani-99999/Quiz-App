const quizData = [
    {
        question: "What is the capital of India?",
        options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: "New Delhi"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is 5 + 7?",
        options: ["10", "12", "11", "15"],
        answer: "12"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", selectOption);
        optionsEl.appendChild(li);
    });
}

function selectOption(e) {
    const selected = e.target.textContent;
    const correct = quizData[currentQuestion].answer;
    if(selected === correct) {
        score++;
    }
    Array.from(optionsEl.children).forEach(li => {
        li.style.pointerEvents = "none";
        if(li.textContent === correct) li.style.backgroundColor = "green";
        else if(li.textContent === selected) li.style.backgroundColor = "red";
    });
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.style.display = "none";
        optionsEl.style.display = "none";
        nextBtn.style.display = "none";
        resultEl.textContent = `You scored ${score} out of ${quizData.length}`;
    }
});

loadQuestion();
