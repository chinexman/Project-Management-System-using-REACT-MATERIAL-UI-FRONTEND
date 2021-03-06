import React from "react";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/signIn/Login";
import { Switch, Route, Link } from "react-router-dom";
import ProtectedRoute from "./Utils/ProtectedRoute";
import Home from "./Pages/Home/Home";
import ChangePassword from "./Pages/changePassword/ChangePassword";
import ForgetPassword from "./Pages/forgetPassword/ForgetPassword";
import SsoLogin from "./Pages/signIn/SsoLogin";
import ResetPassword from "./Pages/resetPassword/ResetPassword";
import Profile from "./Pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* //Open Routes  */}
        <Route exact path="/">
          <h1>Welcome to Blank Landing page.</h1>
          <Link to="/login">Click here</Link> to login
        </Route>
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/forgetpassword" component={ForgetPassword} />
        <Route path="/resetpassword/:token" component={ResetPassword} />
        <Route path="/ssologin/:token" component={SsoLogin} />
        <Home />
      </Switch>
    </div>
  );
}

export default App;
