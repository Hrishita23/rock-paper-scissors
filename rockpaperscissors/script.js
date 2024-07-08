document.addEventListener("DOMContentLoaded", () => {
  let userScore = 0;
  let compScore = 0;

  const choices = document.querySelectorAll(".card"); // Changed to target cards with class .card
  const msg = document.querySelector("#msg");
  const userScorePara = document.querySelector("#user-score");
  const compScorePara = document.querySelector("#comp-score");

  const genComputerChoice = () => {
    let options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };

  const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw";
  };

  const showWinner = (userWin) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      console.log("You win");
      msg.innerText = "You Win!";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      console.log("You lose");
      msg.innerText = "You Lose!";
    }
  };

  const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "Rock") {
        userWin = compChoice === "Paper" ? false : true;
      } else if (userChoice === "Paper") {
        userWin = compChoice === "Scissors" ? false : true;
      } else {
        userWin = compChoice === "Rock" ? false : true;
      }
      showWinner(userWin);
    }
  };

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });
});
