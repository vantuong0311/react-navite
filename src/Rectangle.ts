export class Rectangle{
    height: number;
    width: number;

    constructor(height: number, width: number){
        this.height = height;
        this.width = width;
    }

    chuvi(): number{
        return 2 * (this.height+ this.width)
    }
    dientich():number{
        return this.width*this.height;
    }

    
}