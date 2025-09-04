import { Book } from "./Book";
import {User} from "./bai7"

export class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book "${book.title}" added to the library.`);
    }

    addUser(user: User): void {
        this.users.push(user);
        console.log(`User "${user.getName()}" registered.`);
    }

    listBooks(): void {
        console.log("Books in Library:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} by ${book.author}`);
        });
    }

    listUsers(): void {
        console.log("Registered Users:");
        this.users.forEach((user, index) => {
            console.log(`${index + 1}. ${user.getName()}`);
        });
    }
}