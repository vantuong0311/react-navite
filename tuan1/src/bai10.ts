class Account {
    public id: number;
    private password: string;
    readonly createdAt: Date;

    constructor(id: number, password: string) {
        this.id = id;
        this.password = password;
        this.createdAt = new Date();
    }
}