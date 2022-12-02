import { Paper, Stack, Typography, Button } from "@mui/material";
import React from "react";
import GameContext from "../context/game-context";
import { computerWithoutPowerCard } from "../data/cards";
import "../styles/card.css";

export default function DrawerCard(props:{
  list_card: number,
  text: string,
}){
  const {list_card, text} = props;
  const { moveToNextStep, currentInventory, setCurrentInventory } = React.useContext(GameContext)

  const isPresent : boolean = currentInventory.some((card) => card.num === list_card);

  const onSuccess = () => {
    alert("Le tiroir s'ouvre ! C'est là que maman range son ordinateur !")
    moveToNextStep()
    const newInventory = currentInventory.filter((item) => item.num !== 5 && item.num !== 9)
    // TODO add card key and card memo 
    newInventory.push(computerWithoutPowerCard)
    setCurrentInventory(newInventory)
  }

  const onClick = () => {
    currentInventory.forEach((card) => {
      if (card.num === list_card){
        onSuccess();
        return 
      }
      alert("Vous n'avez pas la carte nécessaire pour effectuer cette action");
    })
  }
  
  return (
    <>
      {isPresent && <Button onClick={onClick}>{text}</Button>}
    </>
  )
}