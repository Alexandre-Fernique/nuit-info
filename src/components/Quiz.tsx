import {Button} from "@mui/material";

type QuizProps = {
    indexSolution: number
    question: string[]
}


export default function Quiz({indexSolution, question}: QuizProps) {


    const handleOnClick = (index: number) => {
        if(index === indexSolution){
            alert('Bonne réponse')
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