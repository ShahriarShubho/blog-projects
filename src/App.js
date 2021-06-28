import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LogIn from "./Components/LogIn/LogIn";
import NotFound from "./Components/NotFound/NotFound";
import SingleBlogs from "./Components/Home/SingleBlogs/SingleBlogs";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./Components/LogIn/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/blogs/:id">
            <SingleBlogs />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
