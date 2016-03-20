// wait for the DOM to finish loading
$(document).ready(function() {
  console.log("sanity check! Javascript is running.");
  // all code to manipulate the DOM
  // goes inside this function
  //establish board
// 0.1 VARIABLES
  var boardArray = [[null,null,null],
                    [null,null,null],
                    [null,null,null]];
  var playerTurn = 'X';
  var turnsPlayed = 0;
  var winner = null;

// 0.2 FUNCTIONS

  function showBoardArray(){
    console.log(boardArray);
  }

// 0.3 JQUERY STUFFS

  $(".btn-danger").on("click", function resetGame(){
    boardArray = [[null,null,null],
                  [null,null,null],
                  [null,null,null]];
    playerTurn = 'X';
    turnsPlayed = 0;
    winner = null;
    $(".box").text("");
    $('.x').removeClass("x", 100000, "linear");
    $('.o').removeClass("o", 100000, "linear");
    console.log(boardArray);
    console.log("playerTurn: " + playerTurn + " turnsPlayed: " + turnsPlayed + " Winner: " + winner);
  });

  $(".box").on("click", function handleClick(event){
    // Logs play to boardArray
    var cellID = $(this).attr('id');
      console.log("cell ID is: " + cellID);
    // * A user should not be able to claim a box that has already been claimed for `X` or `O`.
    for (var i=0; i<cellID.length; i++) {
      cellIDArray = cellID.split("");
      cellIDArray[i] = parseInt(cellIDArray[i], 10);
    }
      // Requirement: Users should be able to click on any empty box to make a move.
    if ( boardArray[cellIDArray[0]][cellIDArray[1]] === null) { // Checks to see if a move has been made in that cell.
      // handles CSS to visualize gameplay
        // Requirement: Every move should alternate between marking an `X` and `O` (the two players).
      if(playerTurn === 'X'){
        $(this).text("X");
        boardArray[cellIDArray[0]][cellIDArray[1]] = playerTurn; // Logs it into the array, like a boss!  Woot, woot!
        playerTurn = 'O'; // switches to next player
        $(this).addClass("x"); // changes bg color
        turnsPlayed++;
      } else {
        $(this).text("O");
        boardArray[cellIDArray[0]][cellIDArray[1]] = playerTurn; // Logs it into the array, like a boss!  Woot, woot!
        playerTurn = 'X'; // switches to next player
        $(this).addClass("o"); // changes bg color
        turnsPlayed++;
      }

    } else {
      console.log("Player " + playerTurn + " tried playing on " + boardArray[cellIDArray[0]][cellIDArray[1]] + "but it was already taken.");
    }

    // determines winner
    if (turnsPlayed === 9){
      $("#mainTitle").text("CAT'S GAME!");
      $('body').addClass("cats-game");
        console.log("CAT'S GAME!");
    } else {
        console.log("keep playing");
    }

    // Logs boardArray for debugging
    console.log(boardArray);
  });
});

// if ($(this).hasClass('x' || 'o')) {
// DON'T LET THEM MAKE A MARK
// }
