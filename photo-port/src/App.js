// center of application - root component 
// **You need to import React in every component file. 
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from "./components/Gallery";


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;