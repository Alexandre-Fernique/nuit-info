import PointOfInterest from "../models/PointOfInterest"


type ButtonProps={
    item:PointOfInterest

}

export default function ScreenButton({item}: ButtonProps){
    const style = {
        width : `${item.width}px`,
        height : `${item.height}px`,
        top : `${item.y}%`,
        left : `${item.x}%`,
    }

    return (
        <button className={`absolute bg-green-800 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}  onClick={item.onClick} style={style}></button>
    )
}