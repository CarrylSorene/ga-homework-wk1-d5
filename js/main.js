  //run function when a grid box is clicked - again how about grids b-i? !

document.getElementById('a').addEventListener('click', function(e) { 
  e.preventDefault(); //?
  
  //display an x or an o in any of the 9 boxes
  
  //contents of board and also each click result, stored in array  - grid letters? need to replace grid letters(placeholders) for actual content - x and o

    var gridContents = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

      for (i = 1; i <= gridContents.length; i+2) {
      grid.Contents.push(i * 2); //add result to the array for each click, keep doing that until grid is full
}

//see above, compare, doing same thing, add missing bits

  //keep track of moves - to indicate whether or not to draw an X or an O. - 
  // how do I vary (variable?) thing in brackets - need a-i depending on each click, not just a ? - loop through array?

  var move = getElementById('a').value; 
  document.getElementById('a').innerHTML = move;
  
    for (i = 0; i <= 9, i+2) {
      return "x"
      return "o"
    }

});

//compare value of gridContents to the rows, columns and diagonals -> if statements

//need playerOne and playerTwo variable? or instead: a row, column or diagonal is full of x / full of o ?

//decide winner
//contents of row or column all o or all x ===

  if (( a,b,c === "x" ) || ( d,e,f === "x") || ( g,h,i === x))  {

           var toWin = [[a, b, c] 
                        [d, e, f]
                        [g, h, i]
                        [a, d, g]
                        [b, e, h]
                        [c, f, i]
                        [a, e, i]
                        [c, e, g]];
            //=== 'x' return win etc - where to put return "x" and return "o" ?
};


//function to store result of move

function storeMove(moveOne, moveTwo){
  return ['a','b','c','d','e','f','g','h','i']; //array of grid id letters? array of..?
}

var storeMove = storeMove('x') // ?

a.addEventListener('click', function() { move(player, 'a'); }); //should it be move? that's variable name from above. declare player. starting a is the grid id

//array for looping through the clicks and storing results - needs to be every 3 and not 2?
var array = [];


//var gridContent = idValue e.g. value of a, b, c
//so replace (“a”) in gridContent array for the value in the grid box

do it with getElementById, though, or just need the variable name for this bit 

declare cells, cellOne, Two, Three

function winnerIs(player) {
  return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}

function winsRow(player) {
  return allThree(player, cells('a'), cells('b'), cells('c')) ||
         allThree(player, cells('d'), cells('e'), cells('f')) ||
         allThree(player, cells('g'), cells('h'), cells('i'));
}

function winsColumn(player) {
  return allThree(player, cells('a'), cells('d'), cells('g')) ||
         allThree(player, cells('b'), cells('e'), cells('h')) ||
         allThree(player, cells('c'), cells('f'), cells('i'));
}

function winsDiagonal(player) {
  return allThree(player, cells('a'), cells('e'), cells('i')) ||
         allThree(player, cells('c'), cells('e'), cells('g'));
}

function allThree(player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
}

//returning winner

    return //game over

var winner = 

//decide winner

alert("Game Over. Player" winner + "wins!")

// if a === x && b === x && c === x for all?

//move count === a-i full - game over

varName= toWin[1] //row d-f - other rows and columns have other indices in the array. need to break out of array to loop through? break out of array for something else?

//if getElementById('a').value === ''
  //else if getElementById('a').value === 'x'
  //else if  getElementById('a').value === 'o'

    //if grid.innerHTML = '' it's empty and playable
    //if turn === 2 % 0 to determine whose turn it is

    function decideWinner(symbol) {
      for(var i = 0; i < toWin.length; i++)
        if .getElementById('grid') === toWin
          return ('The winner is' winner)
        //eg for(var a = 0; a < winningCombinations.length; a++){
        //   if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){

var symbol = ‘x’ || ‘o’

//display winner

function displayWinner() {
    if (player1()) {
      return 'x';
    }
    if (player2()) {
      return 'o';
    }
    return ("It's a tie"); //in a box onscreen
  }

//class of grid or each id letter? - need to loop through to change!