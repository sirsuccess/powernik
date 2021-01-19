import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import Report from "./pages/Report";
import Staff from "./pages/SingleStaff";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Notfound from './pages/NotFound';

function App() {
  return (
    <div className="body">
    <Router >
      <Switch>
        <ChakraProvider>
          <Route path="/" exact component={Home} />
          <Route path="/report" exact component={Report} />
          <Route path="/report/:id" component={Staff} />
          {/* <Route exact path="/*" component={Notfound} /> */}
          {/* <Home /> */}
        </ChakraProvider>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
