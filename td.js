const truthQuestions = [
"What was your first impression of me?"
"What is something you've always wanted to tell me but haven't yet?"
"What do you love most about our relationship?"
"What is a dream or goal you have for our future together?"
"What’s the most memorable moment we’ve shared so far?"
"What are three things you admire about me?"
"What’s something you think we could improve in our relationship?"
"What was the moment you knew you were in love with me?"
"Have you ever had a dream about me? If so, what was it about?"
"What’s your favorite way we spend time together?"
"What’s something you’ve always wanted to do as a couple but haven't yet?"
"What’s a fear you have about our relationship?"
"What do you think is your biggest strength in our relationship?"
"How do you feel about our communication?"
"What’s the best compliment you’ve ever received from me?"
"vWhat is your favorite thing to do with me?"
"If you could change one thing about our relationship, what would it be?"
"What do you think our relationship will look like in five years?"
"What’s the most important lesson you've learned from our relationship?"
"Is there something you’ve always wanted to ask me but never did?"
"How do you feel when we're apart for a long time?"
"What is your favorite physical feature of mine?"
"What’s a funny moment we’ve shared that still makes you laugh?"
"How do you describe me to your friends and family?"
"What’s one thing you want us to experience together?"
"What’s the nicest thing you’ve done for me?"
"What’s your favorite thing that I do for you?"
"What’s a bad habit you have that you think I should know about?"
"What’s one thing you’ve learned about relationships from your parents?"
"If we could travel anywhere in the world together, where would it be and why?"
"What do you think is my best quality?"
"What is the most romantic thing I’ve ever done for you?"
"Have you ever had a dream about our future together? What was it about?"
"What’s a challenge we’ve faced together that made us stronger?"
"What do you think we have in common that helps our relationship?"
"How have you grown as a person since we’ve been together?"
"What’s something you wish we did more often?"
"What’s the best gift you’ve ever received from me?"
"How do you feel about the way we resolve conflicts?"
"What’s a talent or skill you have that you think I don’t know about?"
"What’s a hobby or interest you’d like us to try together?"
"What’s one thing you think I don’t appreciate enough about myself?"
"What’s a book or movie that you think represents our relationship?"
"If we could live anywhere in the world, where would you choose and why?"
"What’s one piece of advice you would give to other couples?"
"What’s the most thoughtful thing I’ve ever done for you?"
"What’s a memory of us that always makes you smile?"
"How would you describe our relationship in three words?"
"What’s one thing you’d like to change about yourself for the sake of our relationship?"
"What’s your favorite nickname or pet name that I call you?"
"How do you feel when we are apart?"
"What’s one thing you think we should do more as a couple?"
"What’s a quality you’ve admired in me but never told me about?"
"What’s a funny or embarrassing moment we’ve shared that you’ll never forget?"
"How do you feel about our future together?"
"What’s your favorite way for us to spend a day off together?"
"What’s a new tradition you’d like to start with me?"
"What’s the best adventure we’ve had together so far?"
"How do you think we complement each other as partners?"
"What’s one thing you’d like to learn about me that you don’t already know?
"How do you think we complement each other as partners?"
"What’s the most romantic thing you can imagine us doing together?"
"What’s one habit of mine that you find endearing?"
"What’s something new you’ve learned about yourself since we started dating?"
"What do you think makes us a great team?"
"What’s a quality in me that you wish you had?"
"What’s your favorite way I show you that I love you?"
"What’s a challenge you’ve faced that you’re proud of overcoming with my support?"
"What’s the funniest thing that’s ever happened to us?"
"What’s one thing you’ve always wanted to try but have been too scared to?"
"What’s a movie or TV show that reminds you of our relationship?"
"What’s your favorite physical activity to do together?"
"What’s one way you think we can better support each other’s goals?"
"How do you feel when you see me after we’ve been apart?"
"What’s your favorite memory of us from this past year?"
"What’s something about our relationship that makes you feel proud?"
"What’s a song that always reminds you of me?"
"What’s something you’ve always wanted to ask me but were too afraid to?"
"What’s a place you’ve always wanted to visit with me?"
"What’s your favorite compliment I’ve ever given you?"
"What’s one of your biggest dreams for our future?"
"What do you think our biggest strength as a couple is?"
"What’s your favorite way to be comforted when you’re upset?"
"What’s a lesson you’ve learned from our relationship?"
"How do you like to spend your free time when we’re together?"
"What’s a moment when you felt proud of us as a couple?"
"What’s a small thing I do that always makes you smile?"
"What’s one thing you want to achieve together in the next year?"
"What’s your favorite thing about our communication?"
"What’s a tradition you’d like to start with me?"
"What’s a favorite memory of us from the last month?",
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
