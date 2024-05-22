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

const relationshipQuotes = [
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves. - Victor Hugo",
    "A successful marriage requires falling in love many times, always with the same person. - Mignon McLaughlin",
    // Add more relationship quotes here
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getTruth() {
    const questionContainer = document.getElementById("question");
    const question = getRandomElement(truthQuestions);
    questionContainer.textContent = question;
}

function getDare() {
    const questionContainer = document.getElementById("question");
    const question = getRandomElement(dareQuestions);
    questionContainer.textContent = question;
}

function getQuote() {
    const quoteContainer = document.getElementById("quote");
    const quote = getRandomElement(relationshipQuotes);
    quoteContainer.textContent = quote;
}
