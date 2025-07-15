let humanScore = 0;
let computerScore = 0;

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
        console.log("Congratulations! You won.");
        humanScore++;
    }
    else if (humanChoice === computerChoice)
    {
        console.log(`Tie! Both chose ${humanChoice}`);
    }
    else
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
};

function playGame()
{
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) 
    {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Final Scores:
        You\tComputer
        ${humanScore}\t${computerScore}
        \n
        `);
    if (humanScore < computerScore) console.log("You Lost!");
    else if (humanScore == computerScore) console.log("Tie");
    else console.log("You Win!");
};

playGame();