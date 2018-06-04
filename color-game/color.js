// variable to track mode easy or hard
var numSquares = 0;
// variable generate random colors 
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


// easyBtn
easyBtn.addEventListener("click", function(){
  easy()
 
 
});

//refactor easyBtn
function easy(){
 //adding  blue background class from css to make easyBtn blue & removing same from hard
 easyBtn.classList.add('selected');
 hardBtn.classList.remove('selected');
 numSquares = 3;
 colors = generateRandomColors(numSquares);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 // looping thru the squares to change only the colors of first three squares
 for(var i = 0; i < squares.length; i ++){
  if(colors[i]){
    squares[i].style.background = colors[i];
  }
  //hiding the other 3 squares
  else{
    squares[i].style.display = "none";
  }

}

}

// hardBtn
hardBtn.addEventListener("click", function(){
hard()


});

// hardBtn refactor

function hard(){
hardBtn.classList.add('selected');
easyBtn.classList.remove('selected');
numSquares = 6;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i ++){
    squares[i].style.background = colors[i];
  
//unhiding the other 3 squares
squares[i].style.display = "block";
  
 }

}


// reset button
 
resetButton.addEventListener("click", function() {
reset();
//   //generate all new colors
// colors = generateRandomColors(numSquares);
//   //pick a new random color from array
//  pickedColor = pickColor();
//   //change colorDisplay to match picked Color
//   // colorDisplay.textContent = pickedColor;
//   // change display message to be New Colors on reset
//   this.textContent = "New Colors"
//   //change colors of squares
//  for(var i = 0; i < squares.length; i++) {
//     squares[i].style.background = colors[i];
//   }
//   h1.style.background = "steelblue";
//   messageDisplay.textContent = ""; // hide message "correct" on display 
  
//refactor resetButton
function reset(){
  //generate all new colors
colors = generateRandomColors(numSquares);
  //pick a new random color from array
 pickedColor = pickColor();
  //change colorDisplay to match picked Color
  // colorDisplay.textContent = pickedColor;
  // change display message to be New Colors on reset
  resetButton.textContent = "New Colors"
  //change colors of squares
 for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";

}


  
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  // add initial colors to squares
  squares[i].style.background = colors[i];

  //add click lis teners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to arr
  for(var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
