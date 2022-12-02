


class PointOfInterest{
    id: number;
    x: number;
    y: number;
    height: number;
    width: number;
    onClick:()=>void;
    //radius: number;
    constructor(id: number, x: number, y: number, height: number = 20, width: number = 20 , onClick:()=>void){
        this.id = id;
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.onClick=onClick;

    }
}
export default PointOfInterest;


