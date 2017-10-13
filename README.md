
<img src="https://i.imgur.com/GfhvaKY.png" alt="Minesweeper mockup on MacBook" style="max-width: 7%;"/>

# Minesweeper

## Overview

This classic single-player puzzle game from the 1960s challenges the player with the task of clearing a minefield. The user must click through the gameboard, as they attempt to clear all spaces. Spaces will give hints about the number of neighbouring mines, and users can "flag" spaces they believe to be mines. Beware, however, if you click on a mine it's game over!

**Play it here:** http://needimf.github.io/minesweeper/

### Screenshots

<img src="https://i.imgur.com/lXMG1DM.png"
     alt="Minesweeper mockup on MacBook"
     style="margin: 0 auto; max-width: 80%;" />

---

<img src="https://i.imgur.com/YHbno38.png"
     alt="Minesweeper mainscreen"
     style="margin: 0 auto; max-width: 80%;" />

---

<img src="https://i.imgur.com/HbRmzA7.png"
     alt="Minesweeper game winner message"
     style="margin: 0 auto; max-width: 80%;" />

---

## Technologies Used

- HTML
- CSS
- Javascript
- jQuery
- Skeleton

---

## The Design

User stories and planning documents can be found at: [Trello Planning Board](https://trello.com/b/AFLAtGYX/minesweeper-browser-game)

The layout of the page utilizes Skeleton's grid-system composed of a single "main" row with two sections, the game's header and the game's main screen. The main screen contains two additional rows. The first is the game screen that hosts the welcome message, difficulty message, and the gameboard itself. The second row hosts the game's navigational buttons. The footer row is located below the page's main row. The entire page layout is wrapped in a sequence of div elements that serve to separate the main content of the page, and the footer. This separation allowed me to design a sticky footer, a feature that isn't incorporated in Skeleton.

---

## Getting Started

1. Download this repository
2. Open index.html
3. Play Minesweeper!

### OR

Play online here: needimf.github.io/minesweeper/

---

## Future Steps

- Updating responsive design for mobile users, especially long-click functionality for iOS users
- Implementing a win/loss counter, and high-score functionality
- Creating a tutorial feature that utilizes an AI that can demonstrate gameplay