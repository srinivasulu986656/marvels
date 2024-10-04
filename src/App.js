import React from "react";
import Login from'./components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Signup from "./components/Signup";


function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="row">
      <div className="col-2"></div>
      <div className="col-4">
      <Login />
      </div>
      <div className="col-2"></div>
      
      <div className="col-4">
      <Signup />
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
