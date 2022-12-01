import React, { useMemo, useState } from 'react';

import './App.css';
import GenericCard from './components/generic-card';
import Screen from "./components/Screen";
import room from "./assets/room.jpg"
import CardImg from './components/card-img';
import CardInput from './components/card-input';
import { Dialog, Grid, Stack } from '@mui/material';
import Card from './models/card';
import GameContext, { GameContextType } from './context/game-context';
import {mockScenario} from './mocks/mockScenario';
import { Scenario } from './types/scenario';
import Inventory from './components/inventory';
import PointOfInterest from './models/PointOfInterest';

const compImg = (<CardImg img_link='https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/key.png'></CardImg>)
const compInput = (<CardInput></CardInput>)

const card1 = new Card(1, "Card 1", "This is card 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Indice 1", compImg, 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
const card2 = new Card(2, "Card 2", "This is card 2 ", "Indice 2", compInput, 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
const component = (<GenericCard card={card1}/>)
const component2 = (<GenericCard card={card2}/>)

function App() {
  const items: PointOfInterest[] = [{x: 20, y: 50, width: 100, height: 100, onClick:()=>{ alert("click")}}, {x: 50, y: 50, width: 100, height: 100,onClick:()=>{ alert("click")}}]

  const [scenario, setScenario] = useState<Scenario>(mockScenario);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [cardOpened, setCardOpened] = useState<Card|undefined>(undefined);

  const gameContext = useMemo<GameContextType>(() => ({
    scenario: undefined,
    currentStep: 0,
    openCard: (card:Card)=>setCardOpened(card),
    moveToNextStep: () => setCurrentStep((step) => step + 1)
  }), []);

  return (

    <GameContext.Provider value={gameContext}>
      {/* Card opened modal*/}
      {
        cardOpened &&( 
        <Dialog fullWidth sx={{height:'100%'}} open={!!cardOpened} onClose={()=>setCardOpened(undefined)}>
          <GenericCard card={cardOpened}/>
        </Dialog>)
      }
      <Stack direction='column' paddingX={10} paddingTop={2}>
        {currentStep >= scenario.steps.length
        ?
          <div>
            Vous avez fini le jeu!
          </div>
          : 
          <Stack direction='column' spacing={2}>
              <Screen items={items} url={room}></Screen>
              <Inventory cards={scenario.steps[currentStep].cards}></Inventory>
            </Stack>
        }
      </Stack>
    </GameContext.Provider>

  );
}


    
export default App;
