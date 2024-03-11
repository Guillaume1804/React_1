import './App.css';
import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import Counter from './count';

function App() {
  return (
    <div className="App">
      <WelcomeMessage name = "Guillaume"/>
      <WelcomeMessage name = ""/>
      <Counter />
    </div>
  );
}

export default App;
