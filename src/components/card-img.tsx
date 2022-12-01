import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import "../styles/card.css";

export default function CardImg(props:{
  img_link : string,
}){
  const {img_link} = props;
  return (
    <Stack justifyContent="center">
            <img src={img_link} width="30%" ></img>
    </Stack>
  )
}