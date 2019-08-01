var freeSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addx(x) {
    $("#" + x).text('X');
    for (var i = 0; i < freeSquares.length; i++) {
        if (freeSquares[i] === x) {
            freeSquares.splice(i, 1);
        }

    }
    addo(x)
    console.log(freeSquares);
};

function addo(x) {
    //calaulate next move: for test add first number from array
    $("#" + freeSquares[0]).text('O');  
    freeSquares.shift(0);
console.log(freeSquares[0]);
    
    //check for WIN!
    
}