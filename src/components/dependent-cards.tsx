import { Paper, Stack, Typography, Button } from "@mui/material";
import React from "react";
import GameContext from "../context/game-context";
import "../styles/card.css";

export default function DependentCard(props:{
  list_card: number,
  text: string,
  onSuccess: () => void,
}){
  const {list_card, text, onSuccess} = props;
  const {currentInventory} = React.useContext(GameContext);
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
    <Button onClick={onClick}>{text}</Button>
  )
}