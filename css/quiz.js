// Définir les questions et réponses du quiz
const questions = [
    {
        question: "Quel est le nom complet de Lionel Messi?",
        answers: [
            "Lionel Andrés Messi",
            "Lionel Messi",
            "Messi Lionel Andrés"
        ],
        correctAnswer: "Lionel Andrés Messi"
    },
    {
        question: "Dans quel club Lionel Messi a-t-il commencé sa carrière professionnelle?",
        answers: [
            "FC Barcelone",
            "Paris Saint-Germain",
            "Newell's Old Boys"
        ],
        correctAnswer: "FC Barcelone"
    },
    {
        question: "Combien de Ballons d'Or Lionel Messi a-t-il remportés?",
        answers: [
            "7",
            "8",
            "6"
        ],
        correctAnswer: "8"
    },
    {
        question: "De quelle nationalité est Lionel Messi?",
        answers: [
            "Argentin",
            "Espagnol",
            "Français"
        ],
        correctAnswer: "Argentin"
    },
    {
        question: "Quel est le surnom de Lionel Messi?",
        answers: [
            "La Pulga",
            "El Diablo",
            "El Rey"
        ],
        correctAnswer: "La Pulga"
    },
    {
        question: "Combien de buts Messi a-t-il marqué lors de sa carrière au FC Barcelone?",
        answers: [
            "672",
            "740",
            "650"
        ],
        correctAnswer: "740"
    },
    {
        question: "Dans quel club Lionel Messi a-t-il signé en 2021?",
        answers: [
            "Paris Saint-Germain",
            "Manchester City",
            "Juventus"
        ],
        correctAnswer: "Paris Saint-Germain"
    },
    {
        question: "Combien de fois Messi a-t-il remporté la Copa América?",
        answers: [
            "2",
            "1",
            "4"
        ],
        correctAnswer: ""
    },
    {
        question: "Quel est le numéro de maillot de Lionel Messi en équipe nationale?",
        answers: [
            "10",
            "9",
            "11"
        ],
        correctAnswer: "10"
    },
    {
        question: "Messi a-t-il marqué son premier but en Coupe du Monde en 2006?",
        answers: [
            "Oui",
            "Non",
            "Il n'a jamais marqué en Coupe du Monde"
        ],
        correctAnswer: "Oui"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Fonction pour afficher la question et les réponses
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    
    // Vider les réponses précédentes
    answersElement.innerHTML = '';
    
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    
    // Créer les boutons de réponses
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("quiz-answer");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(answer));
        answersElement.appendChild(button);
    });
}

// Fonction pour vérifier la réponse
function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    
    // Passer à la question suivante
    currentQuestionIndex++;
    
    // Si toutes les questions sont répondues
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Afficher le résultat final
function showResult() {
    const resultElement = document.getElementById("result");
    const feedbackElement = document.getElementById("feedback");
    const scoreElement = document.getElementById("score");
    
    scoreElement.textContent = score;
    resultElement.style.display = "block";
    
    // Cacher le quiz
    document.getElementById("quiz").style.display = "none";
    
    // Afficher le message en fonction du score
    if (score >= 5) {
        feedbackElement.textContent = "3ebsi";
    } else if (score <= 5) {
        feedbackElement.textContent = "7amdoun";
    } 
}

// Démarrer le quiz en chargeant la première question
loadQuestion();
