import './App.css';
import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import Counter from './count';
import ShowList from './list';

function App() {
  return (
    <div className="App">
      <WelcomeMessage name = "Guillaume"/>
      <WelcomeMessage name = ""/>
      <Counter />
      <ShowList/>
    </div>
  );
}

export default App;
