import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <About />
    </Router>
  );
}

export default App;
