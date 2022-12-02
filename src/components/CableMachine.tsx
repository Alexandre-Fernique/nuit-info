import {useState} from "react";
import ColorButton from "./ColorButton";
import {Alert, Button} from "@mui/material";
import GameContext from "../context/game-context";
import { computerOnCard } from "../data/cards";
import React from "react";


export default function CableMachine() {
    const [red, setRed] = useState([]);
    const [blue, setBlue] = useState([]);
    const [green, setGreen] = useState([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const validSize = (color:string[]) => {
        if(color.length === 1){
            return true;
        }
        return false;

    }
    const { moveToNextStep, currentInventory, setCurrentInventory, closeCard } = React.useContext(GameContext)


    const validate = () => {


        if (validSize(red) && validSize(blue) && validSize(green)){
            if(red[0] === "VIH" && blue[0] === "Sida" && green[0] === "Séropositivité"){
                moveToNextStep()
                const newInventory = currentInventory.filter((item) => item.num !== 10 && item.num !== 12 && item.num !== 14)
                // TODO add card key and card memo 
                newInventory.push(computerOnCard)
                setCurrentInventory(newInventory)
                closeCard()            
            }
        } else {
            setErrorMessage("Oups ! Ce n'est pas la bonne combinaison...")
        }

    }

    return (
        <div className={"flex flex-col gap-4"}>
            <div className={" w-fit flex gap-8 item-center"}>


                    <ColorButton value={"VIH"} setRed={setRed} setBlue={setBlue} setGreen={setGreen}></ColorButton>


                    <ColorButton value={"Sida"} setRed={setRed} setBlue={setBlue} setGreen={setGreen}></ColorButton>

                    <ColorButton value={"Séropositivité"} setRed={setRed} setBlue={setBlue} setGreen={setGreen}></ColorButton>





            </div>
            <div className={""}>
            {errorMessage && (
                    <Alert
                      severity="error"
                      sx={{ marginBottom: 2 }}
                      onClose={() => {
                        setErrorMessage('');
                      }}
                    >
                      {errorMessage}
                    </Alert>
                  )}
                <Button variant="contained" onClick={validate} color="success"> Valider </Button>
            </div>
        </div>

    )
}