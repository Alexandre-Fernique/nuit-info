import { Paper, Stack, Typography, Button, Popover} from "@mui/material";
import React from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Card from "../models/card";
import { keyCard } from "../data/cards";
import GameContext from "../context/game-context";


export default function BookCard(props:{
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

    const { moveToNextStep, currentInventory, setCurrentInventory } = React.useContext(GameContext)


    const onSuccess = () => {
        moveToNextStep()
        const newInventory = currentInventory.filter((item) => item.num !== 7)
        // TODO add card key and card memo 
        newInventory.push(keyCard)
        setCurrentInventory(newInventory)
    }

  return (
    <Paper elevation={1}>
        <Stack  padding="5px" direction='column' spacing='10px' sx={{border:'1.5px black solid', borderRadius:"5px", boxShadow: 5}}>
            <Stack direction='row' width='100%' justifyContent='right' >
            <Stack direction='row' width='100%' justifyContent='flex-start' >
                <Typography fontSize='20px' variant='subtitle2' sx={{fontFamily: 'Quicksand', fontWeight: 'bold'}}>{card.title}</Typography>
            </Stack>
            <Stack width='20%' direction='row' justifyContent='space-between'>
                
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
            
            <Stack direction='row' width='100%' justifyContent='center'>
            <Typography align='justify' sx={{fontFamily: 'Quicksand', fontSize: '14px'}}>{card.description}</Typography>
            </Stack>
        </Stack>

        <Stack justifyContent="center">
            <Button onClick={onSuccess}>
            <img src={card.full_size_img} width="30%" alt="test"></img>
            </Button>
            </Stack>
      
    </Paper>
  )
}