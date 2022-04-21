// Defining functions
var numSquares = 6;
var colors = getColors(numSquares);
var squares = document.querySelectorAll(".block");
fillSquares(squares,colors);
var headerDisplay = document.querySelector("#hdrtxt");
var feedback = document.querySelector("#feedback");
var pickedColor = pickColor(colors);
var h1Display = document.querySelector("h1");
headerDisplay.textContent = pickedColor;
var resetButton = document.querySelector("#reset");
var hardButton = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");
var currentMode = document.querySelector(".selected");



resetButton.addEventListener("click", reset);



for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			feedback.textContent = "Correct!";

			for(var i = 0; i < squares.length; i++) {
				squares[i].style.background = pickedColor;
			}
			h1Display.style.background = pickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			//Show user he/she got it wrong
			feedback.textContent = "Incorrect";
			this.style.background = "#232323";
		}
	});
}



function reset() {
	h1Display.style.background = "steelblue";
	feedback.textContent = "";
	resetButton.textContent = "New Color";

	colors = getColors(numSquares);
	fillSquares(squares, colors);
	pickedColor = pickColor(colors);
	headerDisplay.textContent = pickedColor;
}

//Returns an array of colors
function getColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(makeColor()); //push means add to array
	}
	return arr; //return this new array
}

//Picks a color from a bunch of choices
function pickColor(choices) {
	var random = Math.floor(Math.random() * choices.length);
	return choices[random];
}

//Fills all the squares with the colors
function fillSquares(squares, colors) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}


function makeColor() {
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}