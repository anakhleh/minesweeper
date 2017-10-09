/*----- constants -----*/
/*----- app's state (variables) -----*/
var board;
var boardDimensions;
var numMines;
var winner;
var gameOver;
var explosionCoordinates;

/*----- cached element references -----*/
var $table = $('table');
var $navBar = $('nav');
/*----- event listeners -----*/

// Gameplay listener, handles game events

$table.on('click', 'td', handleClick);

// Button event listeners, serve to handle page navigation signals from user

$navBar.on('click', 'button', handleButtonClick);

function resetGame() {
  init();
}

// function handleButtonClick() {
//   var $button = $(this);
//   switch($button.html()) {
//     case 'Play Game':
//       $button.css('display', 'none');
//       $button.siblings('.difficulty').css('display', 'inline-block');
//       break;
    
//     case 'Beginner' || 'Intermediate' || 'Expert':
//       $button.css('display', 'none');
//       $button.siblings('.difficulty').css('display', 'none');
//       $button.siblings('.gameplay').css('display', 'inline-block');
//       boardDimensions = parseInt($button.attr('data-difficulty'));
//   }
// }

/*----- classes -----*/
class Cell {
  constructor (mine, adjMines, flagged, shown) {
    this.mine = mine;
    this.adjMines = adjMines;
    this.flagged = flagged;
    this.shown = shown;
  }
}
/*----- functions -----*/
// new Cell(false, 0, false, false)
function init () {
  board = new Array(9).fill(null);
  board.forEach(function(elem, idx) {
    elem = new Array(9).fill(null);
    elem = elem.map(function() {
      return new Cell(false, null, false, false);
    });
    board[idx] = elem;
  })
  boardDimensions = 9;
  numMines = 10;
  winner = null;
  randomMinePlacement(boardDimensions);
  assignAdjMines();

  render();
}

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

function expandShownCells(row, col) {
  cell = board[row][col];
  if (cell.mine) {
    return;
  } else if (cell.shown) {
    return
  } else if (cell.adjMines) {
    cell.shown = true;
    return
  } else {
    cell.shown = true;
    checkNeighbours(row, col).forEach(function(neighbour) {
      expandShownCells(neighbour.row, neighbour.column);
    })
  }
}

function calculateWinner() {
  winner = board.every(function(tableRow) {
    return tableRow.every(function(cell) {
      return (cell.mine || cell.shown);
    });
  })
}

function handleClick() {
  var row = parseInt($(this).parent().attr('id'));
  var column = parseInt($(this).attr('class'));
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

function render() {
  if (!gameOver) {
    board.forEach(function(tableRow, row) {
      tableRow.forEach(function(cell, col) {
        if (cell.shown) {
            var $currentCell = $(`#${row}`).children(`.${col}`);
            $currentCell.css('background-color', 'green');
            $currentCell.html(cell.adjMines);
        }
      })
    })
    if (winner) {
      alert('You won!')
    }
  } else {
    $(`#${explosionCoordinates[0]}`).children(`.${explosionCoordinates[1]}`).css('background-color', 'red').html('X');
  }
}
init();