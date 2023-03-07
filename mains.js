//Game variables
var mysteryNumber = Math.floor(Math.random()*10)+1;
console.log(mysteryNumber);
var playersGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var gameState = "";
var gameWon = false; 
var winCount =0;
var loseCount =0;
var playerName;
let won;
let lose;


//The input and output fields
var nones = document.getElementById("none")
var input = document.querySelector("#inputs");
var output = document.querySelector("#status"); 

var named = document.getElementById("names");

var wons = document.querySelector(".awin");
var loses = document.querySelector(".alose")



//score table

  
  


//Player name
playerName = localStorage.getItem("name");
named.innerHTML = "Player: "+playerName;


//The button
var button = document.querySelector("#button");
// button.addEventListener("click", clickHandler, false);
// button.style.cursor = "pointer"; 


//Listen for enter key presses
// window.addEventListener("keydown", keydownHandler, false);

// function keydownHandler(event) { 
//   if (event.keyCode === 13) { validateInput(); } }


function clickHandler() {
  validateInput(); 
  
}



function validateInput() { 
  playersGuess = parseInt(input.value); if (isNaN(playersGuess)) { 
    output.innerHTML = "Please enter a number."; 
    
  } else { 
    playGame();
    } 
  
}

function playGame() {
  nones.style.display = "none";
  
  
  
  guessesRemaining = guessesRemaining - 1;
  guessesMade = guessesMade + 1;
  gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;
  playersGuess = parseInt(input.value);
  
  if (playersGuess > mysteryNumber) {
    
    output.innerHTML = " " + gameState;
    
    
    //Check for the end of the game 
    if (guessesRemaining < 1) { 
      endGame(); 
      
    }
    
  } else if (playersGuess <mysteryNumber) {
    
    output.innerHTML = " " + gameState;
    
    
    
    //Check for the end of the game 
    if (guessesRemaining < 1) { 
      endGame();
      }
  } 
  else if (playersGuess === mysteryNumber) {
    
    gameWon = true;
   
     won = won+1;
    endGame();
  }
}

function endGame(won) {
  if (gameWon) { 
    output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>" + "It only took you " + guessesMade + " guesses."; 
    
    
    
     localStorage.setItem("wons",won.toString());
      
    
  }   else { 
    output.innerHTML = "No more guesses left!" + "<br>" + "The number was: " + mysteryNumber + ".";
    // lose++;
    // localStorage.setItem("lose",lose);
    
    } 
  

  
  // //Disable the button
  // button.removeEventListener("click", clickHandler, false);
  // button.disabled = true; 
  
  
  // //Disable the enter key 
  // window.removeEventListener("keydown", keydownHandler, false); 
  
  
  //Disable the input field
  input.disabled = true;
}


function cl(){
  localStorage.clear();
  location.reload();
}

  // var a = localStorage.getItem("won");
  // var b = localStorage.getItem("lose");
  // wons.innerHTML ="Win: "+a;
  // loses.innerHTML = "Lose: "+b;
  
