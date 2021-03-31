import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import Home from "./pages";
import ContactUsPage from "./pages/contactus";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contactus" component={ContactUsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
