import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import GameContext from "../context/game-context";
import Card from "../models/card";

export default function InventoryCard(props:{card:Card}){
  const {card} = props;
  const { openCard } = useContext(GameContext);
  return (
    <Stack 
      direction='column' 
      alignItems='center' 
      justifyContent='center'
      onClick={() => openCard(card)}
      sx={{
        '&: hover': {
          transform: 'scale(1.03)',
          transition: 'transform .1s',
          cursor: 'pointer',
        },
      }}
      >
      <Typography>{card.title}</Typography>
      <Box width="70px" height="70px">
        <img src={card.thumbnail} style={{width:"100%", height:'100%'}}/>
      </Box>
    </Stack>
  )
}