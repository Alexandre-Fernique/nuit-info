/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useEffect, useMemo, useState } from 'react';

import './App.css';
import GenericCard from './components/generic-card';
import Screen from "./components/Screen";
import office from "./assets/office.png"
import IllnessTokenList from './assets/liste_maladies_tokens.png'
import desktop from "./assets/desktop.jpeg"
import CardImg from './components/card-img';
import { Dialog, Grid, Stack } from '@mui/material';
import Card from './models/card';
import GameContext, { GameContextType } from './context/game-context';
import Inventory from './components/inventory';
import PointOfInterest from './models/PointOfInterest';
import GameTimer from './components/game-timer';
import { drawerCardEntier, computerCard, keyCard, memoCard, posterCard, postItCard, eiffelTowerCard, chestCard } from './data/cards';


const compImg = (<CardImg img_link='https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/key.png'></CardImg>)
//const compInput = (<InputChildren></InputChildren>)

const card1 = new Card(1, "Card 1", "This is card 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Indice 1", compImg, 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
//const card2 = new Card(2, "Card 2", "This is card 2 ", "Indice 2", compInput, 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
const component = (<GenericCard card={card1}/>)
//const component2 = (<GenericCard card={card2}/>)

function App() {
  const initialPointsOfInterest: PointOfInterest[] = [
    {id: 1, x: 22, y: 35, width: 50, height: 50, onClick:()=>{ 
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 1))
      setCurrentInventory((curInv) => [...curInv, eiffelTowerCard])
      setCardOpened(eiffelTowerCard);
     }}, 
    {id: 2, x: 46, y: 78, width: 85, height: 50,onClick:()=>{ 
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 2))
      setCurrentInventory((curInv) => [...curInv, chestCard])
      setCardOpened(chestCard);
     }},
    {id: 3, x: 76, y: 37, width: 50, height: 50,onClick:()=>{ 
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 3))
      setCurrentInventory((curInv) => [...curInv, postItCard])
      setCardOpened(postItCard);
     }},
    {id: 4, x: 87, y: 55, width: 150, height: 50,onClick:()=>{ 
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 4))
      setCurrentInventory((curInv) => [...curInv, drawerCardEntier])
      setCardOpened(drawerCardEntier);
     }},
    {id: 5, x: 78, y: 17, width: 100, height: 170,onClick:()=>{ 
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 5))
      setCurrentInventory((curInv) => [...curInv, posterCard])
      setCardOpened(posterCard);
     }}
  ]

  const [currentInventory, setCurrentInventory] = useState<Card[]>([]);
  const [pointsOfInterest, setPointsOfInterest] = useState<PointOfInterest[]>(initialPointsOfInterest);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [cardOpened, setCardOpened] = useState<Card|undefined>(undefined);
  const lastStep = 3;

  const gameContext = useMemo<GameContextType>(() => ({
    currentInventory: currentInventory,
    currentStep: currentStep,
    pointsOfInterest: pointsOfInterest,
    setCurrentInventory: setCurrentInventory,
    setPointsOfInterest: setPointsOfInterest,
    openCard: (card:Card)=>setCardOpened(card),
    moveToNextStep: () => setCurrentStep((step) => step + 1)
  }), [currentInventory, currentStep, pointsOfInterest]);

  useEffect(() => {
    console.log(currentStep)
  }, [currentStep])

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
        <GameTimer durationInMinutes={15}></GameTimer>
        {currentStep >= lastStep
        ?
          <div>
            Vous avez fini le jeu!
          </div>
          :

          <Stack direction='column' spacing={2}>
              {currentStep < 5 ? (
              <Screen items={pointsOfInterest} url={office}></Screen>
              ) : (
                <Screen items={pointsOfInterest} url={desktop}></Screen>
              )
            }
              <Inventory cards={currentInventory}></Inventory>
          </Stack>
        }
      </Stack>
    </GameContext.Provider>

  );
}


    
export default App;
