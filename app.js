var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messsageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#635858";
});

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
    //add inital color to square
    squares[i].style.backgroundColor = colors[i];
    //add click listenr to square
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if (clickedColor === pickedColor){
            messsageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#635858";
            messsageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(colors){
    //loop through all sqares
    for (var i =0; i < squares.length; i++){
    // change each color to given color
    squares[i].style.backgroundColor = colors;
    }
}
function pickColor(){
     var random = Math.floor(Math.random() * colors.length);
     return colors[random];
} 
function generateRandomColors(num){
    // make an array
    var arr = []
    // repeat num times
    for (var i = 0; i < num; i++){
    //get random color and push into arr
        arr.push(randomColor());
    
    }
    // return that array
    return arr;
}

function randomColor(){
    //pick red from rgb
    var r = Math.floor(Math.random() * 256);
    //picl green from rgb
    var g = Math.floor(Math.random() * 256);
    //pick blue from rgb
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}