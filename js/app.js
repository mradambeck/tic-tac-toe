// wait for the DOM to finish loading
$(document).ready(function() {
  console.log("sanity check! Javascript is running.");
  // all code to manipulate the DOM
  // goes inside this function
  //establish board
// 0.1 GLOBAL VARIABLES
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

  $(".box").on("click", function handleClick(event){

    // need if else to block if array === null

    // Logs play to boardArray
    var cellID = $(this).attr('id');
      console.log("cell ID is: " + cellID);

    // * A user should not be able to claim a box that has already been claimed for `X` or `O`.
    for (var i=0; i<cellID.length; i++) {
      cellIDArray = cellID.split("");
      console.log("ID is: " + cellID);
      cellIDArray[i] = parseInt(cellIDArray[i], 10);
      console.log("Array is: " + cellIDArray);
    }
    boardArray[cellIDArray[0]][cellIDArray[1]] = playerTurn; // BOOM!

    //
    // switch (cellID) {
    //   case "00":
    //     if (cellID){
    //       $("#mainTitle").text("THAT SPACE IS TAKEN!");
    //         console.log("Attempted to play on boardArray[0][0]");
    //         break;
    //     }
    //     else {
    //         boardArray[0][0] = playerTurn;
    //         console.log("added boardArray[0][0]");
    //         break;
    //     }
    //   case "01":
    //     console.log("added boardArray [0][1]");
    //     boardArray[0][1] = playerTurn;
    //     break;
    //   case "02":
    //     console.log("added boardArray [0][2]");
    //     boardArray[0][2] = playerTurn;
    //     break;
    //   case "10":
    //     console.log("added boardArray [1][0]");
    //     boardArray[0][3] = playerTurn;
    //     break;
    //   case "11":
    //     console.log("added boardArray [1][1]");
    //     boardArray[1][1] = playerTurn;
    //     break;
    //   case "12":
    //     console.log("added boardArray [1][2]");
    //     boardArray[1][2] = playerTurn;
    //     break;
    //   case "20":
    //     console.log("added boardArray [2][0]");
    //     boardArray[2][0] = playerTurn;
    //     break;
    //   case "21":
    //     console.log("added boardArray [2][1]");
    //     boardArray[2][1] = playerTurn;
    //     break;
    //   case "22":
    //     console.log("added boardArray [2][2]");
    //     boardArray[2][2] = playerTurn;
    //     break;
    //   default:
    //     console.log("Hit switch statement default, that's strange.");
    // }

    // handles CSS to visualize gameplay
      // Requirement: Users should be able to click on any empty box to make a move.
      // Requirement: Every move should alternate between marking an `X` and `O` (the two players).
    if(playerTurn === 'X'){
      $(this).text("X");
      playerTurn = 'O'; // says who's turn it is
      $(this).addClass("x"); // changes bg color
      turnsPlayed++;

    } else {
      $(this).text("O");
      playerTurn = 'X'; // says who's turn it is
      $(this).addClass("o"); // changes bg color
      turnsPlayed++;
    }


    // determines winner
    if (turnsPlayed === 9){
      $("#mainTitle").text("CAT'S GAME!");
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
