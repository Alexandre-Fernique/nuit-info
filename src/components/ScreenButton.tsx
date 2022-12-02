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
        <button className={`absolute bg-[#e7b995] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full opacity-70`}  onClick={item.onClick} style={style}></button>
    )
}