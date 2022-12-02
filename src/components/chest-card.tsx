import React, { useContext } from "react";
import "../styles/card.css";
import InputChildren from "./input-children";
import GameContext from "../context/game-context";
import { memoCard, bookCard } from "../data/cards";

export default function ChestCard(
){

  const { moveToNextStep, currentInventory, setCurrentInventory, closeCard } = useContext(GameContext)


  const onSuccess = () => {
    moveToNextStep()
    const newInventory = currentInventory.filter((item) => item.num !== 4 && item.num !== 1)
    // TODO add card key and card memo 
    newInventory.push(bookCard)
    newInventory.push(memoCard)
    setCurrentInventory(newInventory)
    closeCard()
  }

  return (
    <InputChildren codeSolution="1234" onSuccess={onSuccess}></InputChildren>
  )
}