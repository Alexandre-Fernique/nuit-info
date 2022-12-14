/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useEffect, useMemo, useState } from 'react';

import './App.css';
import GenericCard from './components/generic-card';
import Screen from "./components/Screen";
import office from "./assets/office.webp"
import IllnessTokenList from './assets/liste_maladies_tokens.png'
import desktop from "./assets/desktop.webp"
import CardImg from './components/card-img';
import {Button, Dialog, Grid, Modal, Paper, Stack, Typography} from '@mui/material';
import Card from './models/card';
import GameContext, { GameContextType } from './context/game-context';
import Inventory from './components/inventory';
import PointOfInterest from './models/PointOfInterest';
import GameTimer from './components/game-timer';
import InventoryCard from './components/inventory-card';
import InputChildren from './components/input-children';
import { drawerCardEntier, drawerCard, computerWithoutPowerCard, keyCard, memoCard, posterCard, postItCard, eiffelTowerCard, chestCard, illenessTokenListCard, lockFileCard } from './data/cards';
import SuccessDialog from './components/success-dialog';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BookCard from './components/book-card';
import CableMachine from './components/CableMachine';
import Quiz from './components/Quiz';


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
    {id: 2, x: 46, y: 75, width: 60, height: 60,onClick:()=>{
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 2))
      setCurrentInventory((curInv) => [...curInv, chestCard])
      setCardOpened(chestCard);
     }},
    {id: 3, x: 76, y: 37, width: 50, height: 50,onClick:()=>{ 
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 3))
      setCurrentInventory((curInv) => [...curInv, postItCard])
      setCardOpened(postItCard);
     }},
    {id: 4, x: 87, y: 55, width: 50, height: 50,onClick:()=>{
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 4))
      setCurrentInventory((curInv) => [...curInv, drawerCardEntier])
      setCardOpened(drawerCardEntier);
     }},
    {id: 5, x: 78, y: 17, width: 100, height: 100,onClick:()=>{
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 5))
      setCurrentInventory((curInv) => [...curInv, posterCard])
      setCardOpened(posterCard);
     }}
  ]

  const secondPointsOfInterest: PointOfInterest[] = [
    {id: 1, x: 63, y: 25, width: 60, height: 60, onClick:()=>{
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 1))
      setCurrentInventory((curInv) => [...curInv, illenessTokenListCard])
      setCardOpened(illenessTokenListCard);
     }}, 
    {id: 2, x: 91, y: 96, width: 60, height: 60,onClick:()=>{
      setPointsOfInterest((curPoints) => curPoints.filter((point) => point.id !== 2))
      setCurrentInventory((curInv) => [...curInv, lockFileCard])
      setCardOpened(lockFileCard);
     }}
  ]

  const [isSuccessDialogVisible, setIsSuccessDialogVisible] = useState<boolean>(false);
  const [currentInventory, setCurrentInventory] = useState<Card[]>([]);
  const [pointsOfInterest, setPointsOfInterest] = useState<PointOfInterest[]>(initialPointsOfInterest);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [cardOpened, setCardOpened] = useState<Card|undefined>(undefined);
  const lastStep = 7;

  const gameContext = useMemo<GameContextType>(() => ({
    currentInventory: currentInventory,
    currentStep: currentStep,
    pointsOfInterest: pointsOfInterest,
    isSuccessDialogVisible: isSuccessDialogVisible,
    setCurrentInventory: setCurrentInventory,
    setPointsOfInterest: setPointsOfInterest,
    setIsSuccessDialogVisible: setIsSuccessDialogVisible,
    openCard: (card:Card)=>setCardOpened(card),
    closeCard: () => setCardOpened(undefined),
    moveToNextStep: () => setCurrentStep((step) => step + 1)
  }), [currentInventory, currentStep, pointsOfInterest, isSuccessDialogVisible]);


    useEffect(() => {
      if (currentStep !== 0) {
      setIsSuccessDialogVisible(true);
      }
      if (currentStep === 5) {
        setPointsOfInterest(secondPointsOfInterest)
      }
    }, [currentStep])

  useEffect(() => {
  }, [currentStep])
  const [openFirstModal,setOpenFirstModal] = useState<boolean>(true);
  const handleClose = () => {
    setOpenFirstModal(false);

  }
  const handleOpen = () => {
    setOpenFirstModal(true);
  }

  return (

    <GameContext.Provider value={gameContext}>
        <div className={"absolute top-4 left-4"}>
            <Button onClick={handleOpen}><HelpOutlineIcon/></Button>
        </div>

      <Modal
          open={openFirstModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >

              <Stack  padding="50px" direction='column' spacing='15px' sx={{backgroundColor:"white",border:'1.5px black solid', borderRadius:"5px", boxShadow: 5,top:"50%",left:"50%",transform: 'translate(-50%, -50%)', position:"absolute"}}>
                        <Typography variant="h3" id="modal-modal-title">
                          Bienvenue dans le jeu !
                        </Typography>
                        <Typography align='justify'>

                            Une amie vous appelle en panique. La veille, elle a eu un rapport sexuel non prot??g??e et a appris que sa partenaire, rencontr??e la veille, avait une IST. Votre maman ??tant gyn??cologue, c???est vers vous qu???elle se tourne pour l???aider ?? savoir quoi faire, ?? savoir comment r??agir ?? cette situation. Malheureusement votre m??re n???est pas l??, mais vous savez que vous allez pouvoir l???aider car celle-ci d??tient toutes les r??ponses sur son ordinateur qui se trouve dans son bureau. Trouvez les informations qu???il faut pour aider votre amie ! Celle-ci a besoin de vous, elle compte sur vous !
                        </Typography>

            </Stack>



      </Modal>
      {/* Card opened modal*/}
      {
        cardOpened &&( 
        <Dialog fullWidth sx={{height:'100%'}} open={!!cardOpened} onClose={()=>setCardOpened(undefined)}>
          {cardOpened.num === 7?<BookCard card={cardOpened}/>:<GenericCard card={cardOpened}/>}
        </Dialog>)
      }
      <Dialog fullWidth sx={{height:'100%'}} open={isSuccessDialogVisible} onClose={()=>setIsSuccessDialogVisible(false)}>
          <SuccessDialog cards={[ postItCard ]}></SuccessDialog>
      </Dialog>
   
      <Stack direction='column' paddingX={10} paddingTop={2}>
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
