import {
  Box,
  Image,
  Avatar,
  Badge,
  Table,
  Button,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  IconButton,
  EmailIcon,
  PhoneIcon,
} from "@chakra-ui/react";
import users from "../utills/users";
import { Link, withRouter } from "react-router-dom";
import { ChevronLeftIcon } from '@chakra-ui/icons'
// Sample card from Airbnb

function AirbnbExample(props) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Container pt={5}>
      <IconButton
       colorScheme="teal"
       aria-label="Call Segun"
       size="lg"
       icon={<ChevronLeftIcon />}
    //    onClick={()=>props.history.back()}
    onClick={props.history.goBack}
       mb={5}
      />
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        color="black"
      >
        <Avatar size="2xl" src={users[0].avatar} alt={property.imageAlt} />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="green">
              {users[0].firstName} {users[0].lastName}'S BONUS REPORT
            </Badge>
            {/* <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Total bonus = 100
            </Box> */}
          </Box>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Days</Th>
                <Th>Time</Th>
                <Th isNumeric>Bonus</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users[0].workDays.map((day) => (
                <Tr>
                  <>
                    <Td>{Object.keys(day)[0]}</Td>
                    <Td isNumeric>{Object.values(day)[0]}</Td>
                    <Td isNumeric>0</Td>
                  </>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Box d="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              Total bonus = 100
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default withRouter(AirbnbExample);
