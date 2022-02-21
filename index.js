// function that picks a random number 1-6, to mimic a dice roll
function rollDice(){
  return Math.ceil(Math.random() * 6);
}

// function to determine the winner
function whoWon(one,two){
  if(one > two){
    return ["Player 1 Wins!",0];
  }else if(two > one){
    return ["Player 2 Wins!",1];
  }else {
    return ["Tied",3];
  }
}

// score keep
let player_1_score = rollDice();
let player_2_score = rollDice();


// select player 1 element
let player_1 = document.querySelectorAll(".dice img")[0];
// select player 2 element
let player_2 = document.querySelectorAll(".dice img")[1];


// Setting the dice to correct image
player_1.setAttribute('src',`images/dice${player_1_score}.png`);
// Setting the dice to correct image
player_2.setAttribute('src',`images/dice${player_2_score}.png`);

// Change heading depending on who won
let heading = document.querySelector("h1");
heading.textContent = whoWon(player_1_score,player_2_score)[0];

// Place flag by the winner
let temp = whoWon(player_1_score,player_2_score)[1];
if (temp !== 3){
  let winnerFlag = document.querySelectorAll('.dice i')[temp];
  winnerFlag.setAttribute('class','fa-solid fa-flag');   
}




// console.log(whoWon(player_1_score,player_2_score)[1]);
// '<i class="fa-solid fa-flag"></i>'

// console.log(winnerFlag.textContent);
