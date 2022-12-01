import PointOfInterest from "../model/PointOfInterest";
import ScreenButton from "./ScreenButton";

type ScreenProps={
    url:string
    items:PointOfInterest[]



}
export default function Screen({url, items}: ScreenProps){



    return(
        <div className="border-2 border-black h-[50vh] w-1/2 mx-auto top-1/2 translate-y-1/2 relative">
            <img src={url} className="absolute h-full w-full object-cover" alt={"Point d'intêret"}></img>
            {items.map((item) =>{

                return(
                    <ScreenButton item={item} ></ScreenButton>
                )}
            )}

        </div>
    )
}