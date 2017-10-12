/*

  Global variables & classes

*/

/*          Classes         */

class Cell {
  constructor (mine, adjMines, flagged, shown) {
    this.mine = mine;
    this.adjMines = adjMines;
    this.flagged = flagged;
    this.shown = shown;
  }
}


/*          Constants         */

var mineHeatMapColors = {
  1: 'adjMines-1',
  2: 'adjMines-2',
  3: 'adjMines-3',
  4: 'adjMines-4',
  5: 'adjMines-5',
  6: 'adjMines-6',
  7: 'adjMines-7',
  8: 'adjMines-8',
}


/*          App's state (variables)         */

var board;
var boardDimensions;
var numMines;
var numFlagged;
var winner;
var gameOver;
var explosionCoordinates;
var startGame;
var runTimer;
var time;
var timerID;


/*          Cached element references         */

var $table = $('.gameBoard-screen');
var $navBar = $('nav');


/*

  Event Listeners

*/

/*          Gameplay click event listener & corresponding event handler         */

function handleClick() {
  (!runTimer) && (timerID = setInterval(gameTimer, 1000));
  runTimer = true;
  var row = parseInt($(this).parent().attr('data-rowNum'));
  var column = parseInt($(this).attr('data-columnNum'));
  if (winner || gameOver) {
    return;
  } else if (board[row][column].mine) {
    explosionCoordinates = [row, column];
    gameOver = true;
  } else {
    expandShownCells(row, column);
    calculateWinner();
  }

  render();
}

$table.on('click', 'td', handleClick);


/*          Gameplay right click event listener & corresponding event handler         */

function handleRightClick() {
  var cell = board[parseInt($(this).parent().attr('data-rowNum'))][parseInt($(this).attr('data-columnNum'))]
  if (winner || gameOver || cell.shown) {
    return;
  } else if (cell.flagged) {
    cell.flagged = false;
    numFlagged -= 1;
  } else {
    cell.flagged = true;
    numFlagged += 1;
  }
  render();
}

$table.on('contextmenu', 'td', handleRightClick);


/*          Button click event listeners & corresponding event handler         */

function handleButtonClick() {
  var $button = $(this);
  switch($button.html()) {
    case 'Play Game':
      $button.parent().hide().siblings('.difficulty').show();
      $('.instructions-screen').hide().siblings('.difficulty-screen').show();
      break;
    
    case 'Beginner':
    case 'Intermediate':
    case 'Expert':
      startGame = true;
      $button.parent().hide().siblings('.gameplay').show();
      $('.difficulty-screen').hide().siblings('.gameBoard-screen').show();
      boardDimensions = parseInt($button.attr('data-boardDimension'));
      numMines = parseInt($button.attr('data-numberMines'));
      $('.gameBoard-screen').html(generateGameboard(boardDimensions));
      init();
      break;
    
    case 'Reset':
      resetGame();
      break;

    case 'Difficulty':
      clearInterval(timerID);
      $button.parent().hide().siblings('.difficulty').show();
      $('.gameBoard-screen').hide().siblings('.difficulty-screen').show();
      break;

    case 'Main Menu':
      clearInterval(timerID);
      $button.parent().hide().siblings('.start-screen').show();
      $('.gameBoard-screen').hide().siblings('.instructions-screen').show();
  }
}

$navBar.on('click', 'button', handleButtonClick);


/*

  Functions

*/

/*          Creates gameboard and adds it to the DOM         */

function generateGameboard(boardSize) {
  boardHTMLRepresentation = 
  `<div class="win-loss-message"></div>
  <table>
    <caption>
      <div class="table-caption-content">
        <p class="mine-counter">Mines: 10</p>
        <p class="timer">Time: 0</p>
      </div>
    </caption>
    <tbody>`;
  for(var i = 0; i < boardSize; i++) {
    boardHTMLRepresentation += `
      <tr data-rowNum="${i}">
        `;
    for(var j = 0; j <boardSize; j++) {
      boardHTMLRepresentation += `<td data-columnNum="${j}"></td>
      `;
    }
    boardHTMLRepresentation += `</tr>`;
  }
  boardHTMLRepresentation += 
  `
    </tbody>
  </table>`;
  return boardHTMLRepresentation;
}


/*    Initializes the beginning state of the game (fills gameboard and defines variables) 
        and calls the render function         */

function init () {
  board = new Array(boardDimensions).fill(null);
  board.forEach(function(elem, idx) {
    elem = new Array(boardDimensions).fill(null);
    elem = elem.map(function() {
      return new Cell(false, null, false, false);
    });
    board[idx] = elem;
  })

  time = 0;
  runTimer = false;
  $('.timer').html(`Time: ${time}`)
  
  numFlagged = 0;
  winner = null;
  gameOver = null;
  randomMinePlacement(boardDimensions);
  assignAdjMines();

  render();
}


/*          Render function called at any change in game state          */

function render() {
  startGame && $('.mine-counter').html(`Mines: ${numMines}`);
  startGame = false;
  if (!gameOver) {
    $('.mine-counter').html(`Mines: ${numMines - numFlagged}`);
    board.forEach(function(tableRow, row) {
      tableRow.forEach(function(cell, col) {
        var $currentCell = $(`*[data-rowNum="${row}"]`).children(`*[data-columnNum="${col}"]`);
        $currentCell.removeClass().html(null);
        if (cell.shown) {
          $currentCell.addClass(`shown ${mineHeatMapColors[cell.adjMines]}`).html(cell.adjMines);
        } else if (cell.flagged) {
          $currentCell.addClass('flagged');
        }
      })
    })
    if (winner) {
      $('.win-loss-message').html("Minefield cleared!").show().delay(2000).fadeOut(1000, function() {$('.win-loss-message').hide();});
      runTimer = false;
      clearInterval(timerID);
    }
  } else {
    runTimer = false;
    clearInterval(timerID);
    $(`*[data-rowNum="${explosionCoordinates[0]}"]`).children(`*[data-columnNum="${explosionCoordinates[1]}"]`).addClass('clicked-mine mine');
    board.forEach(function(row) {
      row.forEach(function(cell) {
        $(`*[data-rowNum="${cell.row}"]`).children(`*[data-columnNum="${cell.column}"]`).removeClass('flagged').addClass('game-end');
        cell.mine && $(`*[data-rowNum="${cell.row}"]`).children(`*[data-columnNum="${cell.column}"]`).addClass('mine');
      })
    })
    $('.win-loss-message').html("Game over!").show().delay(1500).fadeOut(1000, function() {$('.win-loss-message').hide();});
  }
}


/*          Resets the current game by re-initializing variables and state         */

function resetGame() {
  clearInterval(timerID);
  init();
}


/*          Starts and runs the game's timer following the start of each game (first click)         */

function gameTimer () {
  if (runTimer) {
    time += 1;
    $('.timer').html(`Time: ${time}`);
  }
}

/*          Random number generator function used to assign mines randomly 
              throughout the gameboard (with no repeats)         */

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function randomMinePlacement(dimensions) {
  for (var i = 0; i < numMines; i++) {
    var row = getRandomIntInclusive(0, dimensions - 1);
    var col = getRandomIntInclusive(0, dimensions - 1);
    if (board[row][col].mine) {
      i--;
    } else {
      board[row][col].mine = true;
    }
  }
}


/*          Creates an array of the neighbouring cells of an individual cell on the board         */

function checkNeighbours(row, col) {
  var neighbours = []; 
  for (var i = (row - 1); i < (row + 2); i++) {
    for (var j = (col - 1); j < (col + 2); j++) {
      if (i >= 0 && j >= 0 && i <= (boardDimensions - 1) && j <= (boardDimensions - 1) && (i !== row || j !== col)) {
        var neighbour = board[i][j];
        neighbours.push(neighbour);
      }
    }
  }
  return neighbours;
}


/*          Scans the entire board and assigns the number of adjacent mines 
              for each cell (run upon board creation)         */

function assignAdjMines() {
  for (var i = 0; i < boardDimensions; i++) {
    for (var j = 0; j < boardDimensions; j++) {
      var currentCell = board[i][j];
      currentCell.row = i;
      currentCell.column = j;
      if (currentCell.mine) {
        currentCell.adjMines = null;
      }
      else {
        checkNeighbours(i, j).forEach(function(neighbour) {
          neighbour.mine && (currentCell.adjMines += 1);
        })
      }
    } 
  }
}


/*

  Set's the shown property of a mine-free cell to "true" and checks its neighbours for their adjMines values.
  If a neighbour has no adjacent mines, that cell's neighbours get checked. The process is conducted recursively
  until all neighbours either have mines adjacent to them or have previously been shown.

*/

function expandShownCells(row, col) {
  cell = board[row][col];
  if (cell.mine) {
    return;
  } else if (cell.shown) {
    return;
  } else if (cell.adjMines) {
    cell.shown = true;
    cell.flagged && (numFlagged -= 1);
    return;
  } else {
    cell.shown = true;
    cell.flagged && (numFlagged -= 1);
    checkNeighbours(row, col).forEach(function(neighbour) {
      expandShownCells(neighbour.row, neighbour.column);
    })
  }
}

/*          Scans the entire gameboard to determine if all cell's have been shown         */

function calculateWinner() {
  winner = board.every(function(tableRow) {
    return tableRow.every(function(cell) {
      return (cell.mine || cell.shown);
    });
  })
}