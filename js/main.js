document.getElementById('a').addEventListener('click', function(e) { 
  e.preventDefault(); //?
  

  var move = getElementById('a').value //keep track of moves to indicate whether or not to draw an X or an O.
  document.getElementById('a').innerHTML = move; //one for each box? or by class of grid?
  
  while 
    for (i = 0; i <= 9, i+2) //alternate clicks

      return "x"
      return "o"
});

content = toWin[1] //row d-f

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

  //contents of board

    [a, b, c, d, e, f, g, h, i]

  if ( //contents of row or column all o or all x ===
           var toWin = [[a, b, c] 
                        [d, e, f]
                        [g, h, i]
                        [a, d, g]
                        [b, e, h]
                        [c, f, i]
                        [a, e, i]
                        [c, e, g]];
            //=== 'x' return win etc

);

    return //game over

var winner = 

//decide winner

alert("Game Over. Player" winner + "wins!")

// if a === x && b === x && c === x for all?

//move count === a-i full - game over

// To Do:
// track moves
// decide o or x - alternate clicks
// decide winner
// display winner
// grid in rows 

// functions, loops, conditionals
// S A cell should not be able to be replayed once marked.
// S you can reset the game without refreshing the browser
// S keep track of and display to user how many times X and O have won since the last time the browser was refreshed
// SS play against the computer choosing squares at random
