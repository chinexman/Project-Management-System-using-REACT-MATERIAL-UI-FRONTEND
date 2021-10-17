import React from "react";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Signup/Login";
import { BrowserRouter, Route } from "react-router-dom";
import ChangePassword from "./Pages/changePassword/ChangePassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/changepassword" component={ChangePassword} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
