
import { Button, Container } from "@chakra-ui/react";
import { Link, withRouter } from "react-router-dom";
import {  useSelector } from "react-redux";
import AddUser from "../component/AddUser";
import Users from "../component/Users";

function Home() {
  const {staffs} = useSelector(state => state.staffsStore);

  return (
    <Container pt={10}>
  
      <AddUser />
      <Users />
      <Link to="/report">
        <Button colorScheme="teal" size="sm" mt={5} disabled={staffs.length<5}>
          Generate Report
        </Button>
      </Link>
    </Container>
  );
}

export default withRouter(Home);
