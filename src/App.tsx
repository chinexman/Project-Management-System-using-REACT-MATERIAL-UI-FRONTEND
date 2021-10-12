import React from 'react';
 import './App.css';
 import Signup from './Pages/Signup/Signup'; 
 import {BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Route path="/login" component= {Signup} exact />

 </BrowserRouter>
    </div>
  );
}

export default App;
