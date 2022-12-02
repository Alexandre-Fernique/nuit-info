import {useState} from "react";
import ColorButton from "./ColorButton";
import fond from "../assets/fond.png";
import {Button} from "@mui/material";

//exemple de props ["b","c,"a"] lié au bouton de leur index 1:b 2:c 3:a
type CableMachineProps={
    items:string[]
}

export default function CableMachine({items}: CableMachineProps) {
    const [red, setRed] = useState({
        letter:[],
        number:[],
    });
    const [blue, setBlue] = useState({
        letter:[],
        number:[],
    });
    const [green, setGreen] = useState({
        letter:[],
        number:[],
    });
    const validSize = (color:{number:number[],letter:string[]}) => {
        if(color.number.length === 1 && color.letter.length === 1){
            return true;
        }
        return false;

    }


    const validate = () => {
        if (validSize(red) && validSize(blue) && validSize(green)){
            if(items[red.number[0]] == red.letter[0] && items[blue.number[0]] == blue.letter[0] && items[green.number[0]] == green.letter[0]){
                alert("Gagné");
            }
        }
    }

    return (
        <div className={"relative w-fit"}>
            <img src={fond}/>

            <div className={"left-2 top-[14%] absolute"}>
                <ColorButton value={0} setRed={setRed} setBlue={setBlue} setGreen={setGreen}></ColorButton>
            </div>
            <div className={"left-2 top-[42%] absolute"}>
                <ColorButton value={1} setRed={setRed} setBlue={setBlue} setGreen={setGreen}></ColorButton>
            </div>
            <div className={"left-2 top-[71%] absolute"}>
                <ColorButton value={2} setRed={setRed} setBlue={setBlue} setGreen={setGreen}></ColorButton>
            </div>

            <div className={"right-2 top-[14%] absolute"}>
                <ColorButton value={"a"} setRed={setRed} setBlue={setBlue} setGreen={setGreen}></ColorButton>
            </div>

            <div className={"right-2 top-[42%] absolute"}>
                <ColorButton value={"b"} setRed={setRed} setBlue={setBlue} setGreen={setGreen}></ColorButton>
            </div>
            <div className={"right-2 top-[71%] absolute"}>
                <ColorButton value={"c"} setRed={setRed} setBlue={setBlue} setGreen={setGreen}></ColorButton>
            </div>
            <div className={"bottom-2 right-2 absolute"}>
                <Button variant="contained" onClick={validate} color="success"> Valider </Button>
            </div>



        </div>
    )
}