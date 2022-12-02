import React, { useContext } from "react";
import "../styles/card.css";
import InputChildren from "./input-children";
import GameContext from "../context/game-context";
import { bookCard } from "../data/cards";

export default function FileLockCard(
){

  const { moveToNextStep, currentInventory, setCurrentInventory, closeCard } = useContext(GameContext)


  const onSuccess = () => {
    moveToNextStep()
    const newInventory = currentInventory.filter((item) => item.num !== 15 && item.num !== 13)
    // TODO add card key and card memo 
    setCurrentInventory(newInventory)
    closeCard()
  }

  return (
    <InputChildren codeSolution="1234" onSuccess={onSuccess}></InputChildren>
  )
}