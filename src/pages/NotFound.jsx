import { Container, Center, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

function Notfound(props) {
  return (
    <Container pt={20}>
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="lg"
        icon={<ChevronLeftIcon />}
        onClick={props.history.goBack}
        mb={5}
      />
      <Center bg="tomato" h="100px" color="white">
        Oops! Page not found
      </Center>
    </Container>
  );
}

export default Notfound;
