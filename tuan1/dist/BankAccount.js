"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(initSodu = 0) {
        this.sodu = initSodu;
    }
    deposit(amount) {
        if (amount > 0) {
            this.sodu += amount;
            console.log(`đã nạp ${amount} số dư mới là : ${this.sodu}`);
        }
        else
            console.log("số tiền nạp phải lớn hơn 0");
    }
    withdraw(amount) {
        if (this.sodu < amount) {
            console.log("không đủ tiền ");
        }
        else if (amount < 0) {
            console.log("số tiền rút phải lớn hơn 0");
        }
        else {
            this.sodu -= amount;
            console.log(`Đã rút ${amount}. số tiền còn lại là: ${this.sodu}`);
        }
    }
    xemSoDu() {
        return this.sodu;
    }
}
exports.BankAccount = BankAccount;
