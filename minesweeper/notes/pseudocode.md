# Description

When a user decides which difficulty (beginner, intermediate, or expert) they wish to play with, the gameboard will be constructed. The gameboard will consist of a grid (9x9, 16x16, or 22x22, respectively) with mines randomely dispersed throughout the board (10 mines, 40 mines, or 99 mines, respectively). The player clicks single cells on the gameboard at a time. The objective of the game is to clear the minefield without clicking on a mine.

# Pseudocode

### Initialize the state
  set vars to initial values
    number of mines
    gameboard (built as an array of arrays with columns and rows, mines will be randomly dispersed throughout the board)
    winner
  render

### Add event listeners to the gameboard composed of individual, adjacent, square cells (likely a table)

### When a cell is clicked
  If the cell contains a mine:
    Further gameplay is disabled(game is over)
    The mines is displayed
    All mines on the map are displayed
    Any incorrectly flagged mines are highlighted
    A game over message is displayed
  If the cell does not contain a mine:
    Indicate a clean cell by changing its display
    Check to see if the board has been cleared (declare a winner)
    Otherwise:
      Check the cell's neighbouring cells for mines
        If any of the cell's neighbouring cells contain mines:
          Display (in the cell) the number of surrouding mines
        If none of the cell's neighbouring cells contain mines:
          Leave the cell's contents blank
          Check each of the cell's neighbouring cells recursively for neighbouring mines
          Stop once all cleared cells are neighbouring by at least one mine

# Ideas:

  Use two gameboards, and initialize them both when game starts. One is the board with mines, and is unchanged during gameplay. It is used to reference mine locations. The other board is the actual gameplay board. It is altered with user input, and is the board that is displayed in the browser.