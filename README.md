# Dice Game

A simple two-player dice game built with vanilla JavaScript, HTML, and CSS. The game allows players to roll a dice, hold their current score, and compete to reach the highest score. 

## How to Play

1. **Objective:**  
   The goal of the game is to reach the highest score by accumulating points through rolling a dice.

2. **Game Rules:**
   - The game is played by two players, taking turns to roll a dice.
   - On each player's turn, they can roll the dice as many times as they like to accumulate points. However, if they roll a '1', their current score resets to zero, and the turn switches to the other player.
   - A player can choose to "Hold" at any time during their turn, which adds their current score to their total score and switches the turn to the other player.
   - The game continues until a player reaches a predetermined winning score, or the players decide to reset the game.

3. **Controls:**
   - **Roll Dice:** Click the "Roll Dice" button to roll the dice and accumulate points.
   - **Hold:** Click the "Hold" button to save your current score to your total and pass the turn to the other player.
   - **New Game:** Click the "New Game" button to reset all scores and start a new game.

## Features

- **Dynamic Dice Rolling:** A visual representation of the dice roll is displayed on the screen with the corresponding dice image.
- **Score Tracking:** The game keeps track of both the current score (for the ongoing turn) and the total score for each player.
- **Turn Switching:** Automatic turn switching based on the game rules (rolling a '1' or holding the score).
- **Game Reset:** A reset functionality to start a new game with all scores reset.

## Technologies Used

- **JavaScript:** Core game logic and interactivity.
- **HTML:** Basic structure and layout.
- **CSS:** Styling to enhance the user interface.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/dice-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dice-game
   ```
3. Open `index.html` in your web browser to start playing.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to discuss improvements.
