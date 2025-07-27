let humanScore = 0;
let computerScore = 0;
const resultDiv = document.getElementById('result');

function getComputerChoice()
{
    let computerChoiceNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch (computerChoiceNumber)
    {
        case 0: 
            computerChoice = "rock";
            break;

        case 1:
            computerChoice = "paper";
            break;
        
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
};

function getHumanChoice()
{
    let humanChoice = prompt("Enter:\n\tRock\n\tPaper\n\tor Scissors", '');
    return humanChoice;
};

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();
    
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice == "scissors" && computerChoice === "paper"))
    {
        roundResult= "Congratulations! You won.";
        humanScore++;
    }
    else if (humanChoice === computerChoice)
    {
        roundResult = `Tie! Both chose ${humanChoice}`;
    }
    else
    {
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    
    return roundResult;
};

function playGame()
{
    humanScore = 0;
    computerScore = 0;

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const humanChoice = button.id; 
            const computerChoice = getComputerChoice();
            roundResult = playRound(humanChoice, computerChoice);
            resultDiv.textContent = `${roundResult}
            \nYou chose ${humanChoice}, Computer chose ${computerChoice}
            \nScore: You: ${humanScore}, Computer: ${computerScore}`;
            if (humanScore >= 5 || computerScore >= 5) {
                if (humanScore > computerScore) {
                    resultDiv.textContent = "\nYou Win the Game!";
                } else if (humanScore < computerScore) {
                    resultDiv.textContent = "\nYou Lose the Game!";
                } else {
                    resultDiv.textContent = "\nIt's a Tie!";
                }
                humanScore = 0; // Reset scores for a new game
                computerScore = 0;
            }
        });
    });    
}
playGame();