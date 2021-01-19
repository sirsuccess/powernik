import logo from "../logo.svg";
import { Button, ButtonGroup, Container } from "@chakra-ui/react";
import AddUser from "../component/AddUser";
import Users from "../component/Users";
import { Link, withRouter } from "react-router-dom";

function App() {
  return (
    <Container pt={10}>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <AddUser />
      <Users />
      <Link to="/report">
        <Button colorScheme="teal" size="sm" mt={5}>
          Generate Report
        </Button>
      </Link>
    </Container>
  );
}

export default App;
