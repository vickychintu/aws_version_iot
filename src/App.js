import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import axios from "axios";
//import { FaBars } from "react-icons/fa";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      {/* <FaBars /> */}
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
