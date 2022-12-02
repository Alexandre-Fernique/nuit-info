import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import GameContext from "../context/game-context";
import Card from "../models/card";

type SuccessDialogProps = {
  cards: Card[]
}

export default function SuccessDialog({ cards }: SuccessDialogProps) {
  const { setIsSuccessDialogVisible, currentStep } = useContext(GameContext)

  return (
    <>
    { currentStep === 2 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Super, le coffre est ouvert ! Dedans se trouvent un livre fermé et un mémo. Pense à regarde ton inventaire 😉</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 3 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Le livre s’ouvre, une clé était cachée dedans. Pense à regarde ton inventaire 😉</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 4 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Le tiroir s’ouvre ! C’est là que maman range son ordinateur ! Pense à regarde ton inventaire 😉</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 5 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Super le chargeur est réparé ! L’ordinateur va pouvoir se recharger et s’allumer. Pense à regarde ton inventaire 😉</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 6 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Mot de passe correct ! L’ordinateur se déverrouille.</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 7 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Vous avez trouvez le fichier, malheureusement il est vérrouillé ! Pense à regarde ton inventaire 😉</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 8 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Vous avez décodé le fichier vous pouvez maintenant le lire.</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
  </>
  )
}