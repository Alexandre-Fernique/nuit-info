import { Button } from "@mui/material";
import React, { useContext } from "react";
import GameContext from "../context/game-context";

export default function ActionCard(){
  const { moveToNextStep } = useContext(GameContext)
  return (
    <Button onClick={() => { moveToNextStep() }}>Button</Button>
  )
}