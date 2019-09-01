let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('comp-score');
let result_p = document.querySelector('.result p');
let rock = document.getElementById('r');
let paper = document.getElementById('p');
let scissors = document.getElementById('s');
const userSub = "user".fontsize(3).sub();
const compSub = "computer".fontsize(3).sub();

const choices = ['r', 'p', 's'];
function computerChoice(){
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function convertToType(e){
    if(e == 'r')
        return 'Rock';
    if(e == 'p')
        return 'Paper';
    return 'Scissors';    
}

function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToType(userChoice)}${userSub} beats ${convertToType(compChoice)}${compSub}. You win!`;
    const user_div = document.getElementById(userChoice);
    user_div.classList.add('green-style');
    setTimeout(()=> {user_div.classList.remove('green-style')}, 500);
}

function lose(userChoice, compChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToType(userChoice)}${userSub} loses ${convertToType(compChoice)}${compSub}. You lost!`;
    const user_div = document.getElementById(userChoice);
    user_div.classList.add('red-style');
    setTimeout(()=> {user_div.classList.remove('red-style')}, 500);
}

function draw(userChoice, compChoice){
    result_p.innerHTML = `${convertToType(userChoice)}${userSub} equals ${convertToType(compChoice)}${compSub}. Draw!`;
    const user_div = document.getElementById(userChoice);
    user_div.classList.add('gray-style');
    setTimeout(()=> {user_div.classList.remove('gray-style')}, 500);
}

function judge(userChoice, computerChoice){

    switch(userChoice+computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

function play(){
    rock.addEventListener('click', function(){
        const compChoice = computerChoice();
        judge('r', compChoice);
    })
    
    paper.addEventListener('click', function(){
        const compChoice = computerChoice();
        judge('p', compChoice);
    })
    
    scissors.addEventListener('click', function(){
        const compChoice = computerChoice();
        judge('s', compChoice);
    })
}

play();