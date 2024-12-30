const questions = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: true },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];

let questionnum = 0;
let score = 0;

const lesQuestion = document.getElementById('question');
const trueButton = document.getElementById('true-btn');
const falseButton = document.getElementById('false-btn');
const scoreElement = document.getElementById('score');

function Showquestion (){
    if(questionnum < questions.length){
        lesQuestion.textContent = questions[questionnum].question;
    }else{
        lesQuestion.textContent = "terminé"
        trueButton.style.display = 'none'
        falseButton.style.display = 'none'
        scoreElement.textContent = `score = ${score}`
    }
}

trueButton.addEventListener('click',()=>check (true));
falseButton.addEventListener('click',()=>check (false));

function check (answer){
    if (questions[questionnum].answer===answer){
        score ++
    }
    questionnum ++
    Showquestion ()
}