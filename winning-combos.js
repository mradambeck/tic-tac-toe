// boardArray = [[true,true,true],
//               [null,null,null],
//               [null,null,null]];
//
// boardArray[0][0]===boardArray[0][1]===boardArray[0][2];
//
// boardArray = [[null,null,null],
//               [true,true,true],
//               [null,null,null]];
//
// boardArray[1][0]===boardArray[1][1]===boardArray[1][2];

// boardArray = [[null,null,null],
//               [null,null,null],
//               [true,true,true]];
// (boardArray[2][0]==='X')&&(boardArray[2][1]==='X')&&(boardArray[2][2]==='X')

// boardArray = [[true,null,null],
//               [true,null,null],
//               [true,null,null]];
// (boardArray[0][0]==='X')&&(boardArray[1][0]==='X')&&(boardArray[2][0]==='X')
//
// boardArray = [[null,true,null],
//               [null,true,null],
//               [null,true,null]];
// (boardArray[0][1]==='X')&&(boardArray[1][1]==='X')&&(boardArray[2][1]==='X')

// boardArray = [[null,null,true],
//               [null,null,true],
//               [null,null,true]];
// (boardArray[0][2]==='X')&&(boardArray[1][2]==='X')&&(boardArray[2][2]==='X')
//
// boardArray = [[true,null,null],
//               [null,true,null],
//               [null,null,true]];
// (boardArray[0][0]==='X')&&(boardArray[1][1]==='X')&&(boardArray[2][2]==='X')
//
// boardArray = [[null,null,true],
//               [null,true,null],
//               [true,null,null]];
// (boardArray[0][2]==='X')&&(boardArray[1][1]==='X')&&(boardArray[2][0]==='X')
