import React from "react";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Signup/Login";
import { Switch, Route, Link } from "react-router-dom";
import ProtectedRoute from "./Utils/ProtectedRoute";
import TestHome from "./Pages/Home/TestHome";

function App() {
  console.log("App is re-rendering");
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>Welcome to Blank Landing page.</h1>
          <Link to="/login">Click here</Link> to login
        </Route>
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <ProtectedRoute path="/protected">
          <TestHome />
        </ProtectedRoute>
        <ProtectedRoute path="/home">
          {console.log("Home called")}
          <div> This is Home and protected too, protected tooo </div>
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
