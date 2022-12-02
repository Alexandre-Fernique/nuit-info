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
          backgroundColor: '#f7f7f7',
          padding: '10px',
            borderRadius: '10px',
            boxShadow: 5,
        '&: hover': {
          transform: 'scale(1.1)',
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