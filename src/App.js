import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./Components/Home/Home/Home"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LogIn from "./Components/LogIn/LogIn";
import NotFound from "./Components/NotFound/NotFound";
import AddBlog from "./Components/AddBolg/AddBlog";
import ManageBlog from "./Components/ManageBlog/ManageBlog"
function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route path="/addBlog">
            <AddBlog/>
          </Route>
          <Route path="/manageBlog">
            <ManageBlog/>
          </Route>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
