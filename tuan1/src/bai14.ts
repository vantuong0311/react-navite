class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getDetails(): void {
        console.log(`${this.name} earns $${this.salary} per year.`);
    }
}

export class Manager extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    scheduleMeeting(): void {
        console.log(`${this.name} is scheduling a team meeting.`);
    }
}

export class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    writeCode(): void {
        console.log(`${this.name} is writing awesome code.`);
    }
}