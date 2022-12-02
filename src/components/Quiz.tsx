import {Button} from "@mui/material";
import React from "react";
import GameContext from "../context/game-context";

type QuizProps = {
    indexSolution: number
    question: string[]
}


export default function Quiz( ) {
    const { moveToNextStep } = React.useContext(GameContext)
    const {indexSolution, question} =  {
        indexSolution: 2,
        question: ["response1", "reponse2", "reponse3"]
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
                        <Button variant="contained" onClick={()=>handleOnClick(index)}>{item}</Button>
                    </div>)
            })
            }

        </div>
    )
}