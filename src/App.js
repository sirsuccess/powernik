import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { persistor, store } from "./store";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Notfound = lazy(() => import("./pages/NotFound"));
const Report = lazy(() => import("./pages/Report"));
const Staff = lazy(() => import("./pages/SingleStaff"));

// import Notfound from './pages/NotFound';

function App() {
  return (
    <div className="body">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router>
            <Switch>
              <ChakraProvider>
                <Suspense fallback={<Spinner color="red.200" />}>
                  <Route path="/" exact component={Home} />
                  <Route path="/report" exact component={Report} />
                  <Route path="/report/:id" exact component={Staff} />
                  {/* <Route exact path="*" component={Notfound} /> */}
                </Suspense>
              </ChakraProvider>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
