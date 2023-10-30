score = 0;
flippedOver = 0;    //how many cards are flipped
square1 = 0;
square2 = 0;


function flipSquare(id) {
    //changes the image of the squares
    if(id == 1 || id == 9) {
        document.getElementById(id).src = "img-1.png";
    }
    if(id == 2 || id == 10) {
        document.getElementById(id).src = "img-2.png";
    }
    if(id == 3 || id == 11) {
        document.getElementById(id).src = "img-3.png";
    }
    if(id == 4 || id == 12) {
        document.getElementById(id).src = "img-4.png";
    }
    if(id == 5 || id == 13) {
        document.getElementById(id).src = "img-5.png";
    }
    if(id == 6 || id == 14) {
        document.getElementById(id).src = "img-6.png";
    }
    if(id == 7 || id == 15) {
        document.getElementById(id).src = "img-7.png";
    }
    if(id == 8 || id == 16) {
        document.getElementById(id).src = "img-8.png";
    }

    if(flippedOver == 0) {
        if(square1 !== id) {   
            square1 = id;
            flippedOver++;
        }
    } else if(flippedOver == 1) {
        square2 = id;
        flippedOver++;
        matchSquares(square1, square2);
    }
}

//checks to see if the squares match
function matchSquares() {
    flippedOver = 0;    //sets the flipped squares to 0
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
    if(document.getElementById(square1).src == document.getElementById(square2).src) {
        return
    } else {        //sets the image back to the question mark
        document.getElementById(square1).src = "question.png";
        document.getElementById(square2).src = "question.png";
        square1 = square2 = "";
    }
}

//resets the game
function reset() {
    score = 0;
    flippedOver = 0;
    square1 = square2 = "";
    //resets all grid images to question marks
    for(let i = 1; i <= 16; i++) {
        document.getElementById(i).src = "question.png";
    }
}


