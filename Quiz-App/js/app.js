const quizData = [{
        question: 'How old is Damola?',
        a: '10',
        b: '17',
        c: '20',
        d: '26',
        answer: 'b'
    },
    {
        question: 'Who is the president of Nigeria?',
        a: 'Obasanjo',
        b: 'Abudulahi',
        c: 'Damola',
        d: 'Buhari',
        answer: 'd'
    },
    {
        question: 'What year was Black Phanter2 released?',
        a: '2010',
        b: '2017',
        c: '2022',
        d: '2600',
        answer: 'c'
    },
    {
        question: 'Whatis the most used programming language in 2022?',
        a: 'HTML',
        b: 'C#',
        c: 'Java',
        d: 'python',
        answer: 'a'
    },
    {
        question: 'Who is Damola?',
        a: 'A random kid',
        b: 'A trench kkid',
        c: 'A Programmer',
        d: 'Another lover of Tiwa Savage',
        answer: 'c'
    }
];

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');

const a_option = document.getElementById('a_option');
const b_option = document.getElementById('b_option');
const c_option = document.getElementById('c_option');
const d_option = document.getElementById('d_option');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_option.innerText = currentQuizData.a;
    b_option.innerText = currentQuizData.b;
    c_option.innerText = currentQuizData.c;
    d_option.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answers.forEach((answers) => {
        if (answers.checked) {
            answer = answers.id
        }
    });

    return answer;
}

function deSelectAnswers() {
    answers.forEach((answers) => {
        answers.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // CHECKING TO SEE THE ANSWER 
    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz]. answer) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
           quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions</h2> <button onclick='location.reload()'>Reload</button>`
        }
    }

    loadQuiz();
});