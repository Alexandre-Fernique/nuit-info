import { Alarm } from "@mui/icons-material";
import { Alert, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Card from "../models/card";
import "../styles/card.css";
import GenericCard from "./generic-card";
import InputChildren from "./input-children";
import GameContext from "../context/game-context";
import chestImg from "../assets/chest.png"

export default function ChestCard(
){

  const { moveToNextStep, currentInventory, setCurrentInventory } = useContext(GameContext)


  const onSuccess = () => {

    moveToNextStep()
    const newInventory = currentInventory.filter((item) => item.num !== 1 && item.num !== 4)
    // TODO add card key and card memo 
    newInventory.push()
    setCurrentInventory(newInventory)
  }

  const children = (<InputChildren codeSolution="1234" onSuccess={onSuccess}></InputChildren>)

  const card = new Card( 1, "Coffre", "Un coffre fermé avec un code", "Avez-vous bien regardé l'affiche ?",  children, chestImg)


  return (
    <GenericCard card={card}></GenericCard>
  )
}