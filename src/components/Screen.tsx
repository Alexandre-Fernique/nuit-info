import PointOfInterest from "../models/PointOfInterest";
import ScreenButton from "./ScreenButton";

type ScreenProps={
    url:string
    items:PointOfInterest[]



}
export default function Screen({url, items}: ScreenProps){



    return(
        <div className="border-2 border-black h-[80vh] w-full mx-auto relative">
            <img src={url} className="absolute h-full w-full object-cover" alt={"Point d'intêret"}></img>
            {items.map((item) =>{

                return(
                    <ScreenButton item={item} ></ScreenButton>
                )}
            )}

        </div>
    )
}