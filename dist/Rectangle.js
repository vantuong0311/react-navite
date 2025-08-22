"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    chuvi() {
        return 2 * (this.height + this.width);
    }
    dientich() {
        return this.width * this.height;
    }
}
exports.Rectangle = Rectangle;
