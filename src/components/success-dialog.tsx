import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import GameContext from "../context/game-context";
import Card from "../models/card";

type SuccessDialogProps = {
  cards: Card[]
}

export default function SuccessDialog({ cards }: SuccessDialogProps) {
  const { setIsSuccessDialogVisible } = useContext(GameContext)

  return (
  <Box padding={3}>
    <Stack alignItems="center" spacing="20px">
      <Typography variant="h6">Bravo !</Typography>
      <Typography>Tu as passé une étape, regarde ton inventaire 😉</Typography>
      <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
    </Stack>
  </Box>
  )
}