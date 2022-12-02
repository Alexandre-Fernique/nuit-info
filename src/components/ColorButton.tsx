import React, {useState} from "react";

type ColorButtonProps={
    setRed: React.Dispatch<any>
    setBlue:React.Dispatch<any>,
    setGreen:React.Dispatch<any>,
    value:number|string,

}


export default function ColorButton({setRed,setBlue,setGreen,value}: ColorButtonProps) {
    const [color, setColor] = useState("grey");

    const changeColorNumber = (color:string) => {
        switch (color) {
            case "grey":
                setColor("red");
                    setRed((prevState:{letter:string[],number:number[]}) => {
                        return {
                            ...prevState,
                            number:[...prevState.number,value]
                        }
                    })
                break;
            case "red":
                setColor("blue");

                setBlue((prevState:{letter:string[],number:number[]}) => {
                    return {
                        ...prevState,
                        number:[...prevState.number,value]
                    }
                })
                setRed((prevState: { letter: string[], number: number[] }) => {
                    return {
                        ...prevState,
                        number: [...prevState.number].filter((item) => item !== value)
                    }
                })


                break;
            case "blue":
                setColor("green");

                setGreen((prevState:{letter:string[],number:number[]}) => {
                    return {
                        ...prevState,
                        number:[...prevState.number,value]
                    }
                })
                setBlue((prevState: { letter: string[], number: number[] }) => {
                    return {
                        ...prevState,
                        number: [...prevState.number].filter((item) => item !== value)
                    }
                })


                break;
            case "green":
                setColor("red");
                setRed((prevState:{letter:string[],number:number[]}) => {
                    return {
                        ...prevState,
                        number:[...prevState.number,value]
                    }
                })
                setGreen((prevState: { letter: string[], number: number[] }) => {
                    return {
                        ...prevState,
                        number: [...prevState.number].filter((item) => item !== value)
                    }
                })


        }
    }
    const changeColorLetter = (color:string) => {
        switch (color) {
            case "grey":
                setColor("red");

                setRed((prevState: { letter: string[], number: number[] }) => {
                    return {
                        ...prevState,
                        letter: [...prevState.letter, value]
                    }
                })
                break;
            case "red":
                setColor("blue");

                setBlue((prevState: { letter: string[], number: number[] }) => {
                    return {
                        ...prevState,
                        letter: [...prevState.letter, value]
                    }
                })
                setRed((prevState: { letter: string[], number: number[] }) => {
                    return {
                        ...prevState,
                        letter: [...prevState.letter].filter((item) => item !== value)
                    }
                })


                break;
            case "blue":
                setColor("green");

                setGreen((prevState: { letter: string[], number: number[] }) => {
                    return {
                        ...prevState,
                        letter: [...prevState.letter, value]
                    }
                })
                setBlue((prevState: { letter: string[], number: number[] }) => {
                    return {
                        ...prevState,
                        letter: [...prevState.letter].filter((item) => item !== value)
                    }
                })


                break;
            case "green":
                setColor("red");

                setRed((prevState: { letter: string[], number: number[] }) => {
                    return {
                        ...prevState,
                        letter: [...prevState.letter, value]
                    }
                })
                setGreen((prevState: { letter: string[], number: number[] }) => {
                    return {
                        ...prevState,
                        letter: [...prevState.letter].filter((item) => item !== value)
                    }
                })
        }


    }

    const handleChangeColor = () => {
        if(typeof value === "number"){
            changeColorNumber(color);
        }else {
            changeColorLetter(color);
        }
    }
    const style = {
        backgroundColor : color,
    }

    return (

        <div className={"flex items-center gap-3"}>
            {typeof value === "number" ? (<p className={"text-4xl text-red-600"} >{value+1} </p>) : null}
            <button className={`h-10 w-10 rounded-full`} style={style} onClick={handleChangeColor}></button>
            {typeof value === "string" ? (<p className={"text-4xl text-red-600"} >{value} </p>) : null}


        </div>

    )

}