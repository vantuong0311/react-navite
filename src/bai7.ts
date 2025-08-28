class User{
    private name1: string;

    constructor (name: string){
        this.name1 = name
    }

    public get name(): string{
        return this.name1
    }

    public set name(name: string){
        this.name1 = name
    }
}