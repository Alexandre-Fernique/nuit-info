import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import "../styles/card.css";

export default function CardInput(props:{
}){
  const {} = props;
  return (
    <Stack justifyContent='center'>
        <input width="20%" type='text' placeholder='Enter your name'></input>
    </Stack>
  )
}