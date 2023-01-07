const questionSection = document.getElementById('question-section');
const answerSection = document.getElementById('answer-section');
const button = document.getElementById('button');
const askAgain = document.getElementById('ask-button');
const answer = document.getElementById('answer');
const input = document.getElementById('input');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Outlook hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

button.addEventListener('click', () => {
    toggleSections();

    const randomInt = Math.floor(Math.random() * answers.length);
    const randomChoice = answers[randomInt];
    input.value = '';
    answer.textContent = randomChoice;
});

function toggleSections() {
    questionSection.classList.toggle('hide');
    answerSection.classList.toggle('hide');
}

askAgain.addEventListener('click', () => {
    toggleSections();
});

answers.style.fontFamily = 'Fredoka One';
