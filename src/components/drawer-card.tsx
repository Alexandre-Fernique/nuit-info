import { Paper, Stack, Typography, Button } from "@mui/material";
import React from "react";
import GameContext from "../context/game-context";
import { computerWithoutPowerCard, definitionCard, chargerCard } from "../data/cards";
import "../styles/card.css";

export default function DrawerCard(props:{
  list_card: number,
  text: string,
}){
  const {list_card, text} = props;
  const { moveToNextStep, currentInventory, setCurrentInventory } = React.useContext(GameContext)

  const isPresent : boolean = currentInventory.some((card) => card.num === list_card);

  const onSuccess = () => {
    moveToNextStep()
    const newInventory = currentInventory.filter((item) => item.num !== 5 && item.num !== 9)
    // TODO add card key and card memo 
    newInventory.push(computerWithoutPowerCard)
    newInventory.push(definitionCard)
    newInventory.push(chargerCard)
    setCurrentInventory(newInventory)
  }

  const onClick = () => {
    currentInventory.forEach((card) => {
      if (card.num === list_card){
        onSuccess();
        return 
      }
    })
  }
  
  return (
    <>
      {isPresent && <Button onClick={onClick}>{text}</Button>}
    </>
  )
}