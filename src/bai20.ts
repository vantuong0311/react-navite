interface Vehicle {
    brand: string;
    speed: number;

    start(): void;
    stop(): void;
}
export class Carr implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    start(): void {
        console.log(`${this.brand} car is starting at ${this.speed} km/h.`);
    }

    stop(): void {
        console.log(`${this.brand} car has stopped.`);
    }
}
export class Bike implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    start(): void {
        console.log(`${this.brand} bike is starting at ${this.speed} km/h.`);
    }

    stop(): void {
        console.log(`${this.brand} bike has stopped.`);
    }
}