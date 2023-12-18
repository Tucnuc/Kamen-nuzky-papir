const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

// Získáme všechna možná tlačítka
const possibleChoices = document.querySelectorAll('button')
let userChoice

// přidám event listener ke všem tlačítkům
// můžete pro každé zvlášť --> GPT

possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener('click', (e) => {
        // nastavujeme uživatelovu volbu na id tlačítka, na které se kliklo
        userChoice = e.target.id
        // zobrazit, co si uživatel vybral
        userChoiceDisplay.innerHTML = userChoice
        // náhodný výběr pro pc
        generateComputerChoice()
        // vyhodnocení výherce
        getResult()
    }))

function generateComputerChoice() {
    // generuj náhodné číslo mezi 1-3
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 // random generace
    // přiřadid k číslo káme, nůžky, papír
    // podmínky v JS
    if (randomNumber === 1){
        computerChoice = 'Rock'
    }
    else if (randomNumber === 2){
        computerChoice = 'Scissors'
    }
    else if (randomNumber === 3){
        computerChoice = 'Paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice // zobrazení volby pc na stránce
    
}

function getResult() {
    if (computerChoice === userChoice){ // remíza
        result = 'Draw'
    }
    else if (computerChoice === 'Rock' && userChoice === 'Paper'){ // jestli vyhrává
        result = 'You won'
    }
    else if (computerChoice === 'Rock' && userChoice === 'Scissors'){ // jestli vyhrává
        result = 'You lost'
    }
    else if (computerChoice === 'Paper' && userChoice === 'Scissors'){ // jestli vyhrává
        result = 'You won'
    }
    else if (computerChoice === 'Paper' && userChoice === 'Rock'){ // jestli vyhrává
        result = 'You lost'
    }
    else if (computerChoice === 'Scissors' && userChoice === 'Rock'){ // jestli vyhrává
        result = 'You won'
    }
    else if (computerChoice === 'Scissors' && userChoice === 'Paper'){ // jestli vyhrává
        result = 'You lost'
    }

    // rozšíření přes další else if

    resultDisplay.innerHTML = result
    resultDisplay.className = result
}

// funkci která vezme result a přemění result na něco co pak využiju




function changeStyle(color) {
    const styleSheet = document.getElementById('styleSheet');
    
    if (color === 'monochrome') {
      styleSheet.href = 'monStyles.css';
    } else if (color === 'volcanic') {
      styleSheet.href = 'volStyles.css';
    }
    // Add more conditions for additional styles if needed
  }