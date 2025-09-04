export class Book{
    title: String;
    author: String;
    year : number;

    constructor(title : string, author: String, year: number){
        this.title = title;
        this.author= author;
        this.year= year;
    }

    displayBook(): void{
        console.log(`title : ${this.title}, author : ${this.author}, year : ${this.year}`);
    }
}