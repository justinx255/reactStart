import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Interest from "./components/Interest";
import Education from "./components/Education";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <About />

          <Interest />

          <Education />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
