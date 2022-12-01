import React from 'react';

import './App.css';
import GenericCard from './components/generic-card';
import Screen from "./components/Screen";
import room from "./assets/room.jpg"
import PointOfInterest from "./model/PointOfInterest";

const component = (<GenericCard title="test" description='test'><div>r</div></GenericCard>)
function App() {
  const items: PointOfInterest[] = [{x: 20, y: 50, width: 100, height: 100, onClick:()=>{ alert("click")}}, {x: 50, y: 50, width: 100, height: 100,onClick:()=>{ alert("click")}}]

  return (
      <Screen items={items} url={room}></Screen>

  );
}

export default App;
