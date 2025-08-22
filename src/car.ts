export class Car{
    brand: String;
    model: String;
    year: Number;

    constructor (brand: String, model: String, year: Number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayCar(): void{
        console.log(`brand: ${this.brand}, model: ${this.model}, year: ${this.year}`);
    }
}