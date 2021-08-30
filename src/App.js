import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About"; import Interest from './components/Interest'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <About />
          <Interest />
        </Route>
        <Route to='id'>
          <NavBar />
          <About />
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
