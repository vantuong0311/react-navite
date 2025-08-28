"use strict";
class User {
    constructor(name) {
        this.name1 = name;
    }
    get name() {
        return this.name1;
    }
    set name(name) {
        this.name1 = name;
    }
}
