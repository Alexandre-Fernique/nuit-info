import { Alarm } from "@mui/icons-material";
import { Alert, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles/card.css";

type CardInputProps = {
  codeSolution: string
  onSuccess: () => void
}

export default function InputChildren(props: CardInputProps 
){
  const {codeSolution, onSuccess } = props;

  const [currentCode, setCurrentCode] = useState<string>("");
  const [error, setError] = useState<boolean>(false);


  const onSubmit = () => {
    if(currentCode === codeSolution){
      onSuccess()
    } else {
      // display error 
      setError(true)
    }
  }


  return (
    <Stack justifyContent='center'>
        {error && <Alert>Code invalide</Alert> }
        <TextField type='text' placeholder='Saisir le code' onChange={(event) => {setCurrentCode(event.target.value)}} value={currentCode}></TextField>
        <Button onClick={onSubmit}>Valider</Button>
    </Stack>
  )
}