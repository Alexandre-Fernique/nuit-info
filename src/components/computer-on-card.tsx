import React, { useContext, useState } from "react";
import "../styles/card.css";
import InputChildren from "./input-children";
import GameContext from "../context/game-context";
import chestImg from "../assets/chest.png"
import { keyCard, memoCard } from "../data/cards";

export default function ComputerOnCard(
){

  const { moveToNextStep, currentInventory, setCurrentInventory } = useContext(GameContext)

  const onSuccess = () => {
    moveToNextStep()
    const newInventory = currentInventory.filter((item) => item.num !== 11 && item.num !== 4)
    setCurrentInventory(newInventory)
  }

  return (
    <InputChildren codeSolution="code" onSuccess={onSuccess}></InputChildren>
  )
}