import "./App.css";
import "./darkMode.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";

import ContextProvider from "./context.js";
import DarkProvider from "./components/DarkProvider";

function App() {
  return (
    <Router>
      <ContextProvider>
        <DarkProvider>
          <Switch>
            <Route path="/register">
              <RegisterPage></RegisterPage>
            </Route>
            <Route path="/user/:id">
              <UserPage></UserPage>
            </Route>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/">
              <LoginPage></LoginPage>
            </Route>
          </Switch>
        </DarkProvider>
      </ContextProvider>
    </Router>
  );
}

export default App;
