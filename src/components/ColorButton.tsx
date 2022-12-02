import React, {useState} from "react";

type ColorButtonProps={
    setRed: React.Dispatch<any>
    setBlue:React.Dispatch<any>,
    setGreen:React.Dispatch<any>,
    value:string,

}


export default function ColorButton({setRed,setBlue,setGreen,value}: ColorButtonProps) {
    const [color, setColor] = useState("grey");

    const changeColorLetter = (color:string) => {
        switch (color) {
            case "grey":
                setColor("red");

                setRed((prevState: string[]) => {
                    return  [...prevState, value]

                })
                break;
            case "red":
                setColor("blue");

                setBlue((prevState: string[]) => {
                    return  [...prevState, value]

                })
                setRed((prevState: string[]) => {
                    return  [...prevState].filter((item) => item !== value)

                })


                break;
            case "blue":
                setColor("green");

                setGreen((prevState: string[]) => {
                    return [...prevState, value]

                })
                setBlue((prevState: string[]) => {
                    return  [...prevState].filter((item) => item !== value)

                })


                break;
            case "green":
                setColor("red");

                setRed((prevState: string[]) => {
                    return [...prevState, value]

                })
                setGreen((prevState: string[]) => {
                    return [...prevState].filter((item) => item !== value)

                })
        }


    }

    const handleChangeColor = () => {
        changeColorLetter(color);

    }
    const style = {
        backgroundColor : color,
    }

    return (

        <div className={"flex flex-col items-center gap-3"}>

            <p className={"text-4xl text-red-600"} >{value} </p>
            <button className={`h-10 w-10 rounded-full`} style={style} onClick={handleChangeColor}></button>



        </div>

    )

}