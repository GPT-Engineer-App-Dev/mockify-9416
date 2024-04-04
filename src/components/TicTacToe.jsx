import { useState } from "react";
import { Grid, GridItem, Button, Text, VStack } from "@chakra-ui/react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const boardCopy = [...board];
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (index) => (
    <GridItem
      as="button"
      w="100%"
      bg="gray.100"
      border="1px"
      borderColor="gray.200"
      fontSize={["4xl", "5xl", "6xl"]}
      fontWeight="bold"
      onClick={() => handleClick(index)}
      sx={{
        aspectRatio: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {board[index]}
    </GridItem>
  );

  return (
    <VStack spacing={8} align="center">
      <Grid templateColumns="repeat(3, 1fr)" gap={2} maxWidth="240px" width="100%">
        {Array(9)
          .fill(null)
          .map((_, index) => renderSquare(index))}
      </Grid>
      <Text fontSize={["lg", "xl"]} fontWeight="bold" textAlign="center">
        {winner ? `Winner: ${winner}` : board.every(Boolean) ? "Draw!" : `Next Player: ${xIsNext ? "X" : "O"}`}
      </Text>
      <Button onClick={resetGame} size={["md", "lg"]} colorScheme="blue">
        New Game
      </Button>
    </VStack>
  );
};

const calculateWinner = (board) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default TicTacToe;
