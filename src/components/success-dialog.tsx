import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import GameContext from "../context/game-context";
import Card from "../models/card";

type SuccessDialogProps = {
  cards: Card[]
}

export default function SuccessDialog({ cards }: SuccessDialogProps) {
  const { setIsSuccessDialogVisible, currentStep } = useContext(GameContext)

  const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch('infectionvih.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'infectionvih.pdf';
            alink.click();
        })
    })
}

  return (
    <>
    { currentStep === 1 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Super, le coffre est ouvert ! Dedans se trouvent un livre fermé et un mémo. Pense à regarder ton inventaire 😉</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 2 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Le livre s’ouvre, une clé était cachée dedans. Pense à regarder ton inventaire 😉</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 3 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Le tiroir s’ouvre ! C’est là que maman range son ordinateur ! Pense à regarder ton inventaire 😉</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 4 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Super le chargeur est réparé ! L’ordinateur va pouvoir se recharger et s’allumer. Pense à regarder ton inventaire 😉</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 5 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Mot de passe correct ! L’ordinateur se déverrouille.</Typography>
        <Button onClick={() => { setIsSuccessDialogVisible(false) }} variant="contained">Cool !</Button>
      </Stack>
    </Box>
    }
    { currentStep === 6 && 
      <Box padding={3}>
      <Stack alignItems="center" spacing="20px">
        <Typography variant="h6">Bravo !</Typography>
        <Typography>Vous avez décodé le fichier vous pouvez maintenant le lire. Vous avez désormais toutes les informations, prenez votre téléphone pour répondre à votre amie.</Typography>
        <Button onClick={() => { 
          downloadPDF()
          setIsSuccessDialogVisible(false)
           }} variant="contained">Télécharger le PDF</Button>
      </Stack>
    </Box>
    }
  </>
  )
}