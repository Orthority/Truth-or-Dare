const truthQuestions = [
    "What was the last lie you told?",
    "What's your biggest fear?",
    "What's the most embarrassing thing that's happened to you?",
    // Add more truth questions here
];

const dareQuestions = [
    "Do your best impression of someone in the room.",
    "Wear socks on your hands for the next 3 rounds.",
    "Speak in an accent for the next 5 minutes.",
    // Add more dare questions here
];

function getRandomQuestion(questions) {
    return questions[Math.floor(Math.random() * questions.length)];
}

function getTruth() {
    const questionContainer = document.getElementById("question");
    const question = getRandomQuestion(truthQuestions);
    questionContainer.textContent = question;
}

function getDare() {
    const questionContainer = document.getElementById("question");
    const question = getRandomQuestion(dareQuestions);
    questionContainer.textContent = question;
}
