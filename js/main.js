//run function when a grid box is clicked

document.getElementById('a').addEventListener('click', function(e) { 
  //e.preventDefault(); - needed for this?

  var gridContents = ['', '', '', '', '', '', '', '', ''];

  var playerOne = 'x'
  var playerTwo = 'o'

  function alternateClicks(playerOne, playerTwo) 
  {
  for (i = 0; i <= gridContents.length; i+2) {
    
    function printLetter(x, o) {
      return (playerOne) || return (playerTwo);
    }
}

document.getElementsByClassName(‘grid’).innerHTML = 'x'
document.getElementsByClassName(‘grid’).innerHTML = 'o'

// by className so either player can use any grid box

//loop through these, depending on which is clicked, returning x or o to text in box
  var clickNumber

  switch (clickNumber){
    case 1: 
      = ''
        break;
    case 2: 
      = ''
        break;
    case 3: 
      = ''
        break;
    case 4: 
      = ''
        break;
    case 5: 
      = ''
        break;
    case 6: 
      = ''
        break;
    case 7: 
      = ''
        break;
    case 8: 
      = ''
        break;
    case 9: 
      = ''
        break;
    default:

    var a = document.getElementById(‘a’).innerHTML = printLetter;
    var b = document.getElementById(‘b’).innerHTML = printLetter;
    var c = document.getElementById(‘c’).innerHTML = printLetter;
    var d = document.getElementById(‘d’).innerHTML = printLetter;
    var e = document.getElementById(‘e’).innerHTML = printLetter;
    var f = document.getElementById(‘f’).innerHTML = printLetter;
    var g = document.getElementById(‘g’).innerHTML = printLetter;
    var h = document.getElementById(‘h’).innerHTML = printLetter;
    var i = document.getElementById(‘i’).innerHTML = printLetter;

    //on the next go, alternating
            grid.Contents.push(i * 2);
  //display an x or an o in any of the 9 boxes
  
  //contents of board and also each click result, stored in array  - grid letters? need to replace grid letters(placeholders) for actual content - x and o

    

       //add result to the array for each click, keep doing that until grid is full
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

winner = whoever matches toWin //?

//decide winner
//contents of row or column all o or all x ===

           

            if gridContents === toWin {
              return ("The winner is " + winner)
            }

              (( a,b,c === "x" ) || ( d,e,f === "x") || ( g,h,i === x)) 
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

var toWin = [[a, b, c],
             [d, e, f],
             [g, h, i],
             [a, d, g],
             [b, e, h],
             [c, f, i],
             [a, e, i],
             [c, e, g]]; //all === o or x

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