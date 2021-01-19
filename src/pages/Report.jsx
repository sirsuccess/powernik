import {
  Table,
  Avatar,
  Button,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  IconButton,
} from "@chakra-ui/react";
import users from "../utills/users";
import { Link, withRouter } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";

function Report(props) {
  return (
    <Container maxW="xl" pt={5} centerContent="true">
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="lg"
        icon={<ChevronLeftIcon />}
        onClick={props.history.goBack}
        mb={25}
        pos="relative" top="0" left="34"
      />
      <Table variant="simple" color="white">
        <TableCaption placement="top" textStyle="h1">WEEKLY STAFF BONUS</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th isNumeric>Monday</Th>
            <Th isNumeric>Tueday</Th>
            <Th isNumeric>Wednesay</Th>
            <Th isNumeric>Thursday</Th>
            <Th isNumeric>Friday</Th>
            <Th isNumeric>Bonus</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr>
              <Td>
                <Avatar
                  name={`${user.firstName} ${user.lastName}`}
                  src={user.avatar}
                />
              </Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              {user.workDays.map((day) => (
                <Td isNumeric>{Object.values(day)[0]}</Td>
              ))}
              <Td isNumeric>25.4</Td>
              <Td isNumeric>
                <Link to={`/report/${user.firstName}`}>
                  <Button colorScheme="teal" size="sm" mt={2} ml={5}>
                    Report
                  </Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}

export default withRouter(Report);
