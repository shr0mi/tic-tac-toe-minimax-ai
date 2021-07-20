# tic-tac-toe-minimaxai
This is one of my first javascript project. Check it out at: [Tic-Tac-Toe](https://shr0mi.github.io/tic-tac-toe-minimaxai/)

A simple tic-tac-toe game where computer uses minimax algorithm to find the fastest and the best possible move to win (or atleast to make a draw).

## How minimax algorithm works in this game:
The minimax algorithm takes three parameters: board, depth, isMaximizer.

board - is the virtual playground where computer simpulates the whole game and finds who becomes the winner.

depth - keeps count of how long (how many steps) did it took for the computer to reach the result.

isMaximizer - maximizer is the one who will return the maximum score, if it's not the maximizer then it returns the minimum score. This makes the maximizer (Computer) to choose the best possible move as well as the minimizer (Human) to choose the best possible move in the simulation.

Before every computer move the minimax algorithm recursively goes through the whole game and finds the best possible fastest move where both human and computer chooses their best posssible move to win.

## Visual Representation:
Blue is minimizer (Human) and red is maximizer (Computer).

Minimizer's turn: (So far nothing happened yet)

<img src="https://github.com/shr0mi/tic-tac-toe-minimaxai/blob/main/Images/image844-83.png" width="400" height="300" />

Each of these scenarios gives the following:

<p float="left">
  <img src="https://github.com/shr0mi/tic-tac-toe-minimaxai/blob/main/Images/image2.png" width="250" height="225" />
  <img src="https://github.com/shr0mi/tic-tac-toe-minimaxai/blob/main/Images/image3.png" width="250" height="225" />
  <img src="https://github.com/shr0mi/tic-tac-toe-minimaxai/blob/main/Images/image4.png" width="250" height="225" />
</p>

minimizer would choose the path that give computer lowest chance of winning. In this case it would choose the third path. 

The game scenario prediction will look like this:(blue is minimizer, red is maximizer)

<img src="https://github.com/shr0mi/tic-tac-toe-minimaxai/blob/main/Images/image5.png" width="600" height="500" />
 
