/*----- constants -----*/
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

/*----- app's state (variables) -----*/
var board;
var boardDimensions;
var numMines;
var numFlagged;
var winner;
var gameOver;
var explosionCoordinates;
var startGame;
var runTimer;
var timer;

/*----- cached element references -----*/
var $table = $('.gameBoard-screen');
var $navBar = $('nav');
/*----- event listeners -----*/

// Gameplay listener, handles game events

$table.on('click', 'td', handleClick);
$table.on('contextmenu', 'td', handleRightClick);

// Button event listeners, serve to handle page navigation signals from user

$navBar.on('click', 'button', handleButtonClick);

function resetGame() {
  init();
}

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
      // runTimer = true;
      // timer = 0;
      setInterval(function() {timer += 1;}, 1000);
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

    case 'Change Difficulty':
      $button.parent().hide().siblings('.difficulty').show();
      $('.gameBoard-screen').hide().siblings('.difficulty-screen').show();
      break;

    case 'Main Menu':
      $button.parent().hide().siblings('.start-screen').show();
      $('.gameBoard-screen').hide().siblings('.instructions-screen').show();
  }
}

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
  board = new Array(boardDimensions).fill(null);
  board.forEach(function(elem, idx) {
    elem = new Array(boardDimensions).fill(null);
    elem = elem.map(function() {
      return new Cell(false, null, false, false);
    });
    board[idx] = elem;
  })

  numFlagged = 0;
  winner = null;
  gameOver = null;
  randomMinePlacement(boardDimensions);
  assignAdjMines();

  render();
}

function generateGameboard(boardSize) {
  boardHTMLRepresentation = 
  `<div class="win-loss-message"></div>
  <table>
    <caption>
      <div class="table-caption-content">
        <p class="mine-counter">Mines: 10</p>
        <p class="timer">Timer</p>
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

function handleRightClick() {
  var row = parseInt($(this).parent().attr('data-rowNum'));
  var column = parseInt($(this).attr('data-columnNum'));
  if (winner || gameOver) {
    return;
  } else if(board[row][column].flagged) {
    board[row][column].flagged = false;
    numFlagged -= 1;
  } else {
    board[row][column].flagged = true;
    numFlagged += 1;
  }
  render();
}

function render() {
  // runTimer && $('.timer').html(timer);
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
      $('.win-loss-message').html("You win!").fadeIn(500).delay(1000).fadeOut(1000, function() {$('.win-loss-message').hide();});
    }
  } else {
    $(`*[data-rowNum="${explosionCoordinates[0]}"]`).children(`*[data-columnNum="${explosionCoordinates[1]}"]`).addClass('clicked-mine mine');
    board.forEach(function(row) {
      row.forEach(function(cell) {
        $(`*[data-rowNum="${cell.row}"]`).children(`*[data-columnNum="${cell.column}"]`).removeClass('flagged').addClass('game-end');
        cell.mine && $(`*[data-rowNum="${cell.row}"]`).children(`*[data-columnNum="${cell.column}"]`).addClass('mine');
      })
    })
    $('.win-loss-message').html("Game Over!").fadeIn(500).delay(1000).fadeOut(1000, function() {$('.win-loss-message').hide();});
  }
}
