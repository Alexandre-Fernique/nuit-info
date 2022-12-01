import React, { useMemo, useState } from 'react';

import './App.css';
import GenericCard from './components/generic-card';
import Screen from "./components/Screen";
import room from "./assets/room.jpg"
import PointOfInterest from "./model/PointOfInterest";
import CardImg from './components/card-img';
import CardInput from './components/card-input';
import { Grid } from '@mui/material';
import Card from './models/card';
import GameContext, { GameContextType } from './context/game-context';
import mockScenario from './mocks/mockScenario';
import { Scenario } from './types/scenario';

const compImg = (<CardImg img_link='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'></CardImg>)
const compInput = (<CardInput></CardInput>)
const card1 = new Card(1, "Card 1", "This is card 1", "Indice 1", compImg);
const card2 = new Card(2, "Card 2", "This is card 2", "Indice 2", compInput);
const component = (<GenericCard card={card1}/>)
const component2 = (<GenericCard card={card2}/>)
function App() {
  const items: PointOfInterest[] = [{x: 20, y: 50, width: 100, height: 100, onClick:()=>{ alert("click")}}, {x: 50, y: 50, width: 100, height: 100,onClick:()=>{ alert("click")}}]

  const [scenario, setScenario] = useState<Scenario>(mockScenario);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const gameContext = useMemo<GameContextType>(() => ({
    scenario: undefined,
    currentStep: 0,
    moveToNextStep: () => setCurrentStep((step) => step + 1)
  }), []);

  return (

    <GameContext.Provider value={gameContext}>
      <div className="App">
      {currentStep >= scenario.steps.length
       ?
        <div>
          Vous avez fini le jeu!
        </div>
        : <>
          <Screen items={items} url={room}></Screen>

          <Grid container spacing={2} direction="row">
            <Grid item xs={3}>
            {
              component
            }
            </Grid>
            <Grid item xs={3}>
            {
              component2
            }
            </Grid>

          </Grid>
        </>
      }
      
      <div>{currentStep}</div>
      </div>
    </GameContext.Provider>

    );
  }

    
export default App;
