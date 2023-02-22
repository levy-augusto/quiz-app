const quizData = [
    {
        question: '123+4-5+67-89 = ?',
        a: '90',
        b: '80',
        c: '100 ',
        d: '110',
        correct: 'c'
    }, {
        question: 'Como se escreve o ano 1982 em Números Romanos?',
        a: 'MCMLLXXII',
        b: 'MCMLXXII',
        c: 'MCVLXXXII',
        d: 'MCMLXXXII',
        correct: 'd'
    },
    {
        question: 'Se 1=3, 2=3, 3=5, 4=4, e 5=4, quanto vale 6=?',
        a: '5',
        b: '2',
        c: '3',
        d: '6',
        correct: 'c' 
    },  {
        question: 'Qual é o maior divisor comum dos números 30 e 132?',
        a: '6',
        b: '4',
        c: '2',
        d: '3',
        correct: 'a' 
    }, {
        question: 'Usando apenas o processo de adição, como adicionar oito números 8 para obter o número final de 1000',
        a: '88+88+8+88+8',
        b: '888+8+8+8+8+8',
        c: '88+88+88+88+88',
        d: '888+88+8+8+8',
        correct: 'd' 
    }, 
];


const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.querySelector('button');

const quiz = document.querySelector('#quiz')

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function getSelected() {
    const answersEls = document.querySelectorAll('.answer')
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
            answerEl.checked = false
        }
    })

    return answer;
}


function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}




submitBtn.addEventListener('click', () => {
  
    const answer = getSelected();
    console.log (answer)

    if(answer) {
        if(answer === quizData[currentQuiz].correct) score ++;
        currentQuiz ++;
        if(currentQuiz < quizData.length)  loadQuiz();
        //TODO Show result
        else {
            quiz.innerHTML = `
            <h2>Você respondeu corretamente ${score}/${quizData.length} questões</h2>
            <button onclick = 'location.reload()'>Tentar Denovo</button>`
        }
    }

})