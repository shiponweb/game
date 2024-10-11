// =========================================Number guessing DOM part Start from here================================//
//========Player one DOM part Start=========//
let playerOne             = document.querySelector('.playerOne');
let playerInput           = document.querySelector('.playerInput');
let playerButton          = document.querySelector('.playerButton');
//========Player one DOM part End=========//
//========Player Two DOM part Start=========//
let playertwo             = document.querySelector('.playertwo');
let playerTwoinput        = document.querySelector('.playerTwoinput');
let playerTwobutton       = document.querySelector('.playerTwobutton');
//========Player Two DOM part Start=========//
//========Player Three DOM part Start=========//
let playerthree           = document.querySelector('.playerthree');
let playerThreeinput      = document.querySelector('.playerThreeinput');
let playerThreebutton     = document.querySelector('.playerThreebutton');
//========Player Three DOM part Start=========//
let playerName            = document.querySelector('.playerName');
let error                 = document.querySelector('.error');
let result                = document.querySelector('.result');  
let result1               = document.querySelector('.result1');
let color                 = document.querySelector('.color'); 
let counter               = document.querySelector('.counter');
let counter1              = document.querySelector('.counter1');
let chances               = 2; 
let threeChances          = 2;
let winner_image = document.querySelector('.winner_image');
// =========================================Number guessing DOM part End from here================================//
// =================================================Number guessing Condition part Start from here================================//
//==========Player one Condition part Start==========//
playerButton.addEventListener ('click' , () => {
  if (playerInput.value == '' || isNaN (playerInput.value) ) {
      error.innerHTML        = 'Please enter a valid number'
      error.style.color      = 'red'
      error.style.fontSize   = '16px'
      error.style.backgroundColor = '#f8d7da';
      error.style.color = '#721c24';
      error.style.border = '1px solid #f5c6cb';
      error.style.padding = '10px 15px';
      error.style.borderRadius = '5px';
      error.style.margin = '10px 0';
  } else if (playerInput.value > 10) {
      error.innerHTML = 'Input number must be equal or less than 10'
      error.style.color = 'red'
      error.style.fontSize = '16px'
      error.style.backgroundColor = '#f8d7da';
      error.style.color = '#721c24';
      error.style.border = '1px solid #f5c6cb';
      error.style.padding = '10px 15px';
      error.style.borderRadius = '5px';
      error.style.margin = '10px 0';
  } else {
      playertwo.style.display = 'block'
      playerOne.style.display = 'none'
      error.innerHTML = ''
      playerName.innerHTML = 'Player Two'
      error.style.display= 'none'
      playerName.style.color = 'green'
      playerName.style.textShadow = '3px 3px 5px #00FF00'
  }
})
//==========Player one Condition part End==========//
//==========Player Two Condition part Start==========//
playerTwobutton.addEventListener ('click', () => {
  if (playerTwoinput.value == '') {
      error.innerHTML = 'Please enter a valid number'
      error.style.color = 'red'
      error.style.fontSize = '20px'
      error.style.display= 'block'
  } else {
    if (playerTwoinput.value> 10) {
      error.innerHTML = 'Input number must be equal or less than 10'
      error.style.color = 'red'
      error.style.fontSize = '20px'
      error.style.display= 'block'
    } else {
      if (playerInput.value == playerTwoinput.value) {
      result.innerHTML = 'Player Two Win'
      winner_image.style.display = 'block'
      playertwo.style.display = 'none'
      playerName.style.display = 'none'
      result.style.fontSize = '30px'
      color.style.display = 'none'
          result1.innerHTML = ''
      } else {
      counter.innerHTML = 'Chances left:' + chances--;
      result1.innerHTML = 'Number Not Match'
      result1.style.color = 'red'
      error.style.display= 'none'
      } if (chances < 0) {
      playerthree.style.display = 'block'
      playerOne.style.display = 'none'
      playertwo.style.display = 'none'
      counter.innerHTML = ''
      result.innerHTML = ''
      playerName.innerHTML = 'Player Three'
      playerName.style.color = 'blue'
      playerName.style.fontSize = '30px'
      playerName.style.textShadow = '2px 2px 5px #FF0000';
      }
    }
  } 
})
//================Player Two Condition part End================//
//===============Player Three Condition part Start=============//
playerThreebutton.addEventListener ('click' , () => {
  if (playerThreeinput.value == '' || isNaN (playerThreeinput.value) ) {
          error.innerHTML = 'Please enter a valid number'
          error.style.color = 'red'
          error.style.fontSize = '20px'
          error.style.display= 'block'
      
  } else if (playerThreeinput.value > 10) {
          error.innerHTML = 'Input number must be equal or less than 10'
          error.style.color = 'red'
          error.style.fontSize = '20px'
          error.style.display= 'block'
  } 
   if (playerInput.value == playerThreeinput.value) {
          result.innerHTML = 'Player Three Win'
          winner_image.style.display = 'block'
          result.style.fontSize = '30px'
          playerthree.style.display = 'none'
          playerName.style.display = 'none'
          color.style.display = 'none'
          result1.innerHTML = ''
  } else {
          result1.innerHTML = 'Number Not Match'
          result1.style.color = 'red'
          counter1.innerHTML = 'Chances left:' + threeChances--;
  } if (threeChances < 0)  {
          result.innerHTML = 'Player One Win'
          winner_image.style.display = 'block'
          counter1.innerHTML=''
          playerthree.style.display = 'none'
          playerName.style.display = 'none'
          color.style.display = 'none'
          result.style.fontSize = '30px'
          result1.innerHTML = ''
  } 
})
//==========Player Three Condition part End==========//
// ====================================================Number guessing Condition part Start from here================================//

