# Bank Tech Test
This test was to:
>build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

The rules of tic-tac-toe are as follows:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

### Instructions
to use:
```sh
git clone git@github.com:tobold/tic-tac-toe-test.git
cd tic-tac-toe-test
open index.html

game.play(X,Y) #places a 'X' at the X Y coordinates.
game.play(X,Y) #places a '0' at the X Y coordinates.
the game automatically changes turn
```
###### coordinates are as follows:
|   | 0   | 1   | 2   |
|---|-----|-----|-----|
| 0 |(0,0)|(1,0)|(2,0)|
| 1 |(0,1)|(1,1)|(2,1)|
| 2 |(0,2)|(1,2)|(2,2)|

to test:
```
open ./spec/SpecRunner.html
```
