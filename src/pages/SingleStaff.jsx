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
import { Link, withRouter } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { convertTimeToBonus, formatCurrency, totalBonus } from "../utills";

function AirbnbExample(props) {
  const staff = props.location.state;

  return (
    <Container pt={5}>
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="lg"
        icon={<ChevronLeftIcon />}
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
        centerContent="true"
      >
        <Avatar
          size="2xl"
          ml={5}
          mt={5}
          src={staff.avatar}
          alt={staff.imageAlt}
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="green">
              {staff.firstName} {staff.lastName}'S BONUS REPORT
            </Badge>
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
              {staff.workDays.map((day) => (
                <Tr>
                  <>
                    <Td>{Object.keys(day)[0]}</Td>
                    <Td isNumeric>{Object.values(day)[0]}</Td>
                    <Td isNumeric>
                      {formatCurrency(
                        convertTimeToBonus(Object.values(day)[0])
                      )}
                    </Td>
                  </>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Box d="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              Total bonus = {formatCurrency(totalBonus(staff.workDays))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default withRouter(AirbnbExample);
