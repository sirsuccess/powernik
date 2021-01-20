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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AddTime from "./AddTime";
import DeleteUser from "../component/DeleteUser";

function Users(props) {
  const { staffs } = useSelector((state) => state.staffsStore);
  if (staffs.length < 1) {
    return (
      <Alert status="info" mt={10}>
        <AlertIcon />
        No staff yet. Click on "Add Staff" Button to add staff
      </Alert>
    );
  }
  return (
    <div>
      <Accordion allowToggle>
        {staffs.map((user) => (
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {user?.firstName} {user?.lastName}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Wrap>
                <WrapItem mr={5}>
                  <Avatar
                    name={`${user?.firstName} ${user?.lastName}`}
                    src={user?.avatar}
                  />
                </WrapItem>
                <WrapItem>
                  <DeleteUser
                    id={user?.id}
                    name={`${user?.firstName} ${user?.lastName}`}
                  />
                  <AddTime
                    id={user?.id}
                    name={`${user?.firstName} ${user?.lastName}`}
                    time={user.workDays}
                  />
                  <Link
                    to={{
                      pathname: `/report/${user?.firstName}`,
                      state: user,
                    }}
                  >
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
