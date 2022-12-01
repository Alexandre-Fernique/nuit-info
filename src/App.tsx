import React from 'react';
import logo from './logo.svg';
import './App.css';
import GenericCard from './components/generic-card';

const component = (<GenericCard title="test" description='test'><div>r</div></GenericCard>)
function App() {
  return (
    <div className="App">
      {
        component
      }
    </div>
  );
}

export default App;
