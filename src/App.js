// src/App.js

import React from 'react';
import './App.css';
import Login from './Login';
// src/index.js or src/App.js

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Login Page</h1>
      </header> */}
      <main>
        <Navbar/>
        <Login />

      </main>
    </div>
  );
}

export default App;
