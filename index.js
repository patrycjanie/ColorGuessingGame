var num = 6;
var colors = [];
var winningColor;
var squares = document.querySelectorAll(".square");
var rgbText = document.getElementById('searchedColor');
var comment = document.getElementById('comment');
var header = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var difficultyButtons = document.querySelectorAll('.mode');


init();

function init () {
    difficulty();  
    squaresGame();
    reset();
}

function difficulty() {
    //changing a difficulty of the game
    for (i = 0; i < difficultyButtons.length; i++){
        difficultyButtons[i].addEventListener('click', function () {
            [].forEach.call(difficultyButtons, function(difficultyButtons) {
                difficultyButtons.classList.remove("selected");
            });
            this.classList.add("selected");

            this.textContent === 'Easy' ? num = 3:num = 6;
            reset();
        }); 
    }
}

function squaresGame() {
    for (i = 0; i < squares.length; i++) {
        // check if square color is a winning one
        squares[i].addEventListener('click', function() { 
            var clickedColor = this.style.backgroundColor;
            if (clickedColor !== winningColor) {
                this.style.backgroundColor = '#232323';
                comment.textContent = "Try again";
            }

            else {
                comment.textContent = "Correct!";
                changeColor();
                header.style.backgroundColor = winningColor;
                resetButton.textContent = 'Play again';
            }
        });
    }
}

//starting a game from the beginning
function reset() {
    colors = generateRandomColors(num);
    winningColor = pickRandomColor();
    rgbText.textContent = winningColor;
    for (i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "steelblue"; 
    comment.textContent = '';
}

//creating a new game
resetButton.addEventListener('click', function() {
    reset();
    resetButton.textContent = 'New colors';
});

//changing a difficulty of the game
for (i = 0; i < difficultyButtons.length; i++){
    difficultyButtons[i].addEventListener('click', function () {
        [].forEach.call(difficultyButtons, function(difficultyButtons) {
            difficultyButtons.classList.remove("selected");
        });
        this.classList.add("selected");

        this.textContent === 'Easy' ? num = 3:num = 6;
        reset();
    });}

//generating random rgb color
function generateColors () {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + ", " + green + ", " + blue + ")"; 
    return color;
}

//generating an array of random color. array's length depends on a chosen difficulty
function generateRandomColors(num) {
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(generateColors());
    }
    return arr;
}

//changes all squares color to a winning one, after winning the game
function changeColor () {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = winningColor;
    }
}

//picking a winning color from generated array
function pickRandomColor () {
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}


