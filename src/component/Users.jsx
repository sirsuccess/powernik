import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  WrapItem,
  Avatar,
  Wrap,
  Button,
} from "@chakra-ui/react";
import users from "../utills/users";
import { Link } from "react-router-dom";
import AddTime from "../component/AddTime2";
import DeleteUser from "../component/DeleteUser";

function Users(params) {
  return (
    <div>
      <Accordion allowToggle>
        {users.map((user) => (
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {user.firstName} {user.lastName}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Wrap>
                <WrapItem mr={5}>
                  <Avatar
                    name={`${user.firstName} ${user.lastName}`}
                    src={user.avatar}
                  />
                </WrapItem>
                <WrapItem>
                  {/* {user.workDays.map((day) => (
                    // console.log("day", Object.values(day)[0])
                    <WrapItem>
                      <div>{Object.keys(day)[0]}</div>
                      {Object.values(day)[0]}
                    </WrapItem>
                  ))} */}
                  <DeleteUser/>
                  {/* <Button colorScheme="red" size="sm" mt={2} ml={5}>
                    Delete
                  </Button> */}
                  {/* <Button colorScheme="blue" size="sm" mt={2} ml={5}>
                    Add Time
                  </Button> */}
                  <AddTime />
                  <Link to={`/report/${user.firstName}`}>
                    <Button colorScheme="teal" size="sm" mt={2} ml={5}>
                      Report
                    </Button>
                  </Link>
                </WrapItem>
              </Wrap>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Users;
