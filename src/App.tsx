import React from 'react';
 import './App.css';
 import Signup from './Pages/Signup/Signup'; 
  import Login from './Pages/Signup/Login'; 
 import {BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>Welcome to Blank Landing page.</h1>
          <Link to="/login">Click here</Link> to login
        </Route>
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/ssologin/:token" component={SsoLogin} />
        <ProtectedRoute path="/protected">
          <div> This is Home and protected too, protected tooo </div>
        </ProtectedRoute>
        <ProtectedRoute path="/home">
          <TestHome />
        </ProtectedRoute>
        <ProtectedRoute path="/changepassword">
          <ChangePassword />
        </ProtectedRoute>
        <Route path="/forgetpassword" component={ForgetPassword} />
        <Route path="/resetpassword/:token" component={ResetPassword} />
      </Switch>
    </div>
  );
}

export default App;
