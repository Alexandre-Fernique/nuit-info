import { Paper, Stack, Typography, Button, Popover} from "@mui/material";
import React from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Card from "../models/card";


export default function GenericCard(props:{
  card : Card,
}){
  const card = props.card;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Paper elevation={1}>
      <Stack height="130px" padding="5px" direction='column' spacing='10px' border='1px black solid' border-radius="5px">
        <Stack direction='row' width='100%' justifyContent='right' >

          <Stack width='20%' direction='row' justifyContent='space-between'>
            <Stack justifyContent='center'>
              {card.num}
            </Stack>
            
            <Button onClick={handleClick}><HelpOutlineIcon/></Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}>
              <Typography>{card.ind}</Typography>
            </Popover>
          </Stack>
        </Stack>
        <Stack direction='row' width='100%' justifyContent='center' >
          <Typography fontSize='20px'>{card.title}</Typography>
        </Stack>
        <Stack direction='row' width='100%' justifyContent='center' >{card.description}</Stack>
        <Stack direction='row' width='100%' justifyContent='center' >
        </Stack>
        {card.children}
      </Stack>
      
    </Paper>
  )
}