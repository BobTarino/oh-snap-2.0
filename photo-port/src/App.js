// center of application - root component 
// **You need to import React in every component file. 
import React from 'react';
import './App.css';
import About from './components/About';


function App() {

  return (
    <div>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;