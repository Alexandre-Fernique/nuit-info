import {useState} from "react";
import ColorButton from "./ColorButton";
import {Button} from "@mui/material";


export default function CableMachine() {
    const [red, setRed] = useState([]);
    const [blue, setBlue] = useState([]);
    const [green, setGreen] = useState([]);

    const validSize = (color:string[]) => {
        if(color.length === 1){
            return true;
        }
        return false;

    }

    const validate = () => {


        if (validSize(red) && validSize(blue) && validSize(green)){
            if(red[0] === "VIH" && blue[0] === "Sida" && green[0] === "Séropositivité"){
                alert("Bravo vous avez réussi")
            }
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
                <Button variant="contained" onClick={validate} color="success"> Valider </Button>
            </div>
        </div>

    )
}