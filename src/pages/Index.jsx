import { Heading } from "@chakra-ui/react";
import TicTacToe from "../components/TicTacToe";

const Index = () => {
  return (
    <>
      <Heading as="h1" size="xl" textAlign="center" my={8}>
        Tic-Tac-Toe
      </Heading>
      <TicTacToe />
    </>
  );
};

export default Index;
