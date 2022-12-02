import React, { useContext, useState } from "react";
import "../styles/card.css";
import InputChildren from "./input-children";
import GameContext from "../context/game-context";
import { keyCard, memoCard } from "../data/cards";

export default function ChestCard(
){

  const { moveToNextStep, currentInventory, setCurrentInventory } = useContext(GameContext)


  const onSuccess = () => {
    moveToNextStep()
    const newInventory = currentInventory.filter((item) => item.num !== 4 && item.num !== 1)
    // TODO add card key and card memo 
    newInventory.push(keyCard)
    newInventory.push(memoCard)
    setCurrentInventory(newInventory)
  }

  return (
    <InputChildren codeSolution="1234" onSuccess={onSuccess}></InputChildren>
  )
}