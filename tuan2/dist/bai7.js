"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai6_1 = require("./bai6");
const pr1 = (0, bai6_1.simulateTask1)(1000, "X");
const pr2 = (0, bai6_1.simulateTask1)(2000, "Y");
const pr3 = (0, bai6_1.simulateTask1)(1500, "Z");
Promise.race([pr1, pr2, pr3]).then((firstResult) => {
    console.log("first task comleted: ", firstResult);
})
    .catch((error) => {
    console.log("loi", error);
});
