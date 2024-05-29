let currentQuestion = 0;
let score = 0;
let feedbackText = document.getElementById('feedback-text');
let scoreElement = document.getElementById('score');

const questions = [
    {
        question: '¿Cuál es el fenómeno natural que ocurre cuando el Sol, la Tierra y la Luna están alineados?',
        image: 'eclipse.jpg',
        answers: [
            { text: 'Auroras Boreales', correct: false },
            { text: 'Eclipse Lunar', correct: true },
            { text: 'Lluvia de Meteoros', correct: false }
        ]
    },
    {
        question: '¿Cuál es el fenómeno natural causado por el choque de partículas solares con la atmósfera de la Tierra?',
        image: 'auroras.jpg',
        answers: [
            { text: 'Auroras Boreales', correct: true },
            { text: 'Eclipse Solar', correct: false },
            { text: 'Cometa', correct: false }
        ]
    },
    {
        question: '¿Qué fenómeno natural ocurre cuando una masa de aire frío se encuentra con una masa de aire caliente y húmedo?',
        image: 'tormenta.jpg',
        answers: [
            { text: 'Huracán', correct: false },
            { text: 'Tornado', correct: false },
            { text: 'Tormenta', correct: true }
        ]
    },
    {
        question: '¿Cómo se le llama al fenómeno natural donde la capa de ozono de la atmósfera absorbe la mayor parte de la radiación ultravioleta del Sol?',
        image: 'ozono.jpg',
        answers: [
            { text: 'Invernadero', correct: false },
            { text: 'Agujero en la Capa de Ozono', correct: false },
            { text: 'Efecto Invernadero', correct: false },
            { text: 'Efecto Escudo', correct: true }
        ]
    },
    {
        question: '¿Cuál es el nombre del fenómeno natural donde las gotas de agua se congelan en contacto con objetos a baja temperatura?',
        image: 'escarcha.jpg',
        answers: [
            { text: 'Lluvia', correct: false },
            { text: 'Granizo', correct: false },
            { text: 'Nieve', correct: false },
            { text: 'Escarcha', correct: true }
            
        ]
    }
    // Agrega más preguntas aquí
];

function checkAnswer(answer) {
    if (questions[currentQuestion].answers[answer].correct) {
        feedbackText.textContent = '¡Respuesta Correcta!';
        score++;
        scoreElement.textContent = score;
        document.getElementById('correct-sound').play();
    } else {
        feedbackText.textContent = 'Respuesta Incorrecta. Intenta de Nuevo.';
        document.getElementById('incorrect-sound').play();
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        feedbackText.textContent = '';
    } else {
        feedbackText.textContent = 'Fin del Juego. ¡Gracias por Jugar!';
        document.querySelector('.question').style.display = 'none';
    }
}

function showQuestion() {
    const questionElement = document.querySelector('.question');
    questionElement.querySelector('h2').textContent = `Pregunta ${currentQuestion + 1}:`;
    questionElement.querySelector('img').src = questions[currentQuestion].image;
    questionElement.querySelector('p').textContent = questions[currentQuestion].question;
    const options = questionElement.querySelector('ul');
    options.innerHTML = '';
    questions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.onclick = () => checkAnswer(index);
        options.appendChild(document.createElement('li').appendChild(button));
    });
}

showQuestion();
