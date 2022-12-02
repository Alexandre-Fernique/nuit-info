import {Button, Typography} from "@mui/material";
import React from "react";
import GameContext from "../context/game-context";

type QuizProps = {
    indexSolution: number
    question: string[]
}


export default function Quiz( ) {
    const { moveToNextStep, closeCard } = React.useContext(GameContext)
    const {indexSolution, question} =  {
        indexSolution: 1,
        question: ["T’inquiète, il y a peu de chances que tu attrape une IST de toutes façons.",
         "Va aux urgences ! Ils peuvent te donner un traitement jusqu’à 48h après l’exposition au risque.",
          "Une seule exposition ce n’est pas grave, il en faut plusieurs pour que ce soit vraiment risqué."]
    }

    const handleOnClick = (index: number) => {
        if(index === indexSolution){
            moveToNextStep();
        } else {
            alert('Mauvaise réponse')
        }
    }


    return(
        <div className={"flex flex-col gap-8"}>
            {question.map((item, index) => {
                return (
                    <div key={index}>
                        <Typography>Quel message envoies-tu à ton amie ?</Typography>
                        <Button variant="contained" onClick={()=> {
                            handleOnClick(index)
                            closeCard()
                            }}>{item}</Button>
                    </div>)
            })
            }

        </div>
    )
}