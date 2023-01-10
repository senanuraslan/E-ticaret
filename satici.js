const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
{
    question: "Bebek arabasının bütün tekerlekleri tam mı, öyleyse sağlam mı ?",
    choice1: "Tam, sağlam",
    choice2:"Tam ama sağlam değil", 
    choice3: "Yok"
},
{
    question: "Tutma kolu var mı, varsa sağlam mı?",
    choice1: "Var, sağlam",
    choice2: "Var ama sağlam değil",
    choice3: "Yok"
},
{
    question: "Tentesi var mı, varsa sağlam mı?",
    choice1: "Var, sağlam",
    choice2: "Var ama sağlam değil",
    choice3: "Yok"
},
{
    question: "Arabanın Sepeti var mı, varsa sağlam mı?",
    choice1: "Var, sağlam",
    choice2: "Var ama sağlam değil",
    choice3: "Yok"
},
{
    question: "Arabanın freni var mı, varsa sağlam mı?",
    choice1: "Evet, sağlam",
    choice2: "Evet ama sağlam değil",
    choice3: "Yok"
},
{
    question: "Puset arabadan ayrılabilir mi, ayrılıyor mu?",
    choice1: "Evet, sağlam",
    choice2: "Evet ama sağlam değil",
    choice3: "Yok"
},
{
    question: "Bebek arabası katlanma özelliği var mı, varsa çalışıyor mu?",
    choice1: "Var, çalışıyor",
    choice2: "Var ama çalışmıyor",
    choice3: "Yok"
}
];
startGame = () => {
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= 7){
        return window.location.assign('/and.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;
    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers = true;
};
choices.forEach(choice => {
    choice.addEventListener('click', e=>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    })
})
startGame();
// Popup Al
var modal = document.getElementById('myModal');

// Kipi açan düğmeyi al
var btn = document.getElementById("myBtn");

// Kipi kapatan <span> öğesini edinin
var span = document.getElementsByClassName("close")[0];

// Kullanıcı düğmeyi tıklattığında
btn.onclick = function() {
    modal.style.display = "block";
}

// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span.onclick = function() {
    modal.style.display = "none";
}

// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}