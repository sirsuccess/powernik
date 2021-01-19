import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import Report from "./pages/Report";
import Staff from "./pages/SingleStaff";
import { persistor, store } from "./store";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import Notfound from './pages/NotFound';

function App() {
  return (
    <div className="body">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router>
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
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
