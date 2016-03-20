boardArray = [[true,true,true],
              [null,null,null],
              [null,null,null]];

boardArray[0][0]===boardArray[0][1]===boardArray[0][2];

boardArray = [[null,null,null],
              [true,true,true],
              [null,null,null]];

boardArray[1][0]===boardArray[1][1]===boardArray[1][2];

boardArray = [[null,null,null],
              [null,null,null],
              [true,true,true]];

boardArray[2][0]===boardArray[2][1]===boardArray[2][2];

boardArray = [[true,null,null],
              [true,null,null],
              [true,null,null]];

boardArray[0][0]===boardArray[1][0]===boardArray[2][0];

boardArray = [[null,true,null],
              [null,true,null],
              [null,true,null]];

boardArray[0][1]===boardArray[1][1]===boardArray[2][1];

boardArray = [[null,null,true],
              [null,null,true],
              [null,null,true]];

boardArray[0][2]===boardArray[1][2]===boardArray[2][2];

boardArray = [[true,null,null],
              [null,true,null],
              [null,null,true]];

boardArray[0][0]===boardArray[1][1]===boardArray[2][2];

boardArray = [[null,null,true],
              [null,true,null],
              [true,null,null]];

boardArray[0][2]===boardArray[1][1]===boardArray[2][0];





              // * Users should be able to click a "reset" button to clear all `X`'s and `O`'s from the board and restart the game.
